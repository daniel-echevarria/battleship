import { Ship } from "@/types";
import shipFactory from "../ship/ship";
import generateShipCoordinates from "@/utils/generateShipCoordinates";
import generateCoordinates from "@/utils/generateCoordinates";
import genNearbyCoordinates from "@/utils/genNearbyCoordinates";

type AddShipArgs = {
  length: number;
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

    const updateFreeCoordinates = (coordinates: string[]) => {
      const forbiddenCoordinates = genNearbyCoordinates(coordinates);
      freeCoordinates = freeCoordinates.filter(
        (c) => !forbiddenCoordinates.includes(c)
      );
    };

    const areAllCoordinatesAvailable = (coordinates: string[]) => {
      return coordinates.every((c) => freeCoordinates.includes(c));
    };

    const genValidCoordinates = (
      startCoordinate: string,
      length: number,
      isVertical: boolean
    ) => {
      const shipCoordinates = generateShipCoordinates({
        length,
        startCoordinate,
        isVertical,
      });

      return areAllCoordinatesAvailable(shipCoordinates)
        ? shipCoordinates
        : undefined;
    };

    const addShip = ({ length, isVertical, startCoordinate }: AddShipArgs) => {
      const validCoordinates = genValidCoordinates(
        startCoordinate,
        length,
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
