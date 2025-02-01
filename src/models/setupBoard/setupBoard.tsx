import { Ship } from "@/types";
import shipFactory from "../ship/ship";
import generateShipCoordinates from "@/utils/generateShipCoordinates";
import generateCoordinates from "@/utils/generateCoordinates";
import genNearbyCoordinates from "@/utils/genNearbyCoordinates";

type AddShipArgs = {
  shipLength: number;
  isVertical: boolean;
  startCoordinate: string;
};

const setupBoard = () => {
  const board = (size: number) => {
    const boardMatrix = Array(size)
      .fill(0)
      .map((x) => Array(size).fill(""));
    const myShipFactory = shipFactory();
    const ships: Ship[] = [];
    let freeCoordinates = generateCoordinates(size, size);

    const areAllCoordinatesAvailable = (coordinates: string[]) => {
      return coordinates.every((c) => freeCoordinates.includes(c));
    };

    const updateFreeCoordinates = (coordinates: string[]) => {
      const forbiddenCoordinates = genNearbyCoordinates(coordinates);
      freeCoordinates = freeCoordinates.filter(
        (c) => !forbiddenCoordinates.includes(c)
      );
    };

    const genValidCoordinates = (
      startCoordinate: string,
      shipLength: number,
      isVertical: boolean
    ) => {
      const shipCoordinates = generateShipCoordinates({
        shipLength,
        startCoordinate,
        isVertical,
      });

      return areAllCoordinatesAvailable(shipCoordinates)
        ? shipCoordinates
        : undefined;
    };

    const addShip = ({
      shipLength,
      isVertical,
      startCoordinate,
    }: AddShipArgs) => {
      const validCoordinates = genValidCoordinates(
        startCoordinate,
        shipLength,
        isVertical
      );
      if (!validCoordinates) return;
      const shipOne = myShipFactory(validCoordinates);
      ships.push(shipOne);
      updateFreeCoordinates(validCoordinates);
    };

    const getShips = () => ships;
    const getBoardMatrix = () => boardMatrix;

    return { getBoardMatrix, addShip, getShips, size };
  };

  return board;
};

export default setupBoard;
