import { Ship } from "@/types";
import shipFactory from "../ship/ship";
import generateShipCoordinates from "@/utils/generateShipCoordinates";
import getPossiblePositions from "@/utils/getPossiblePositions";
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

    const isStartCoordinateValid = (
      startCoordinate: string,
      shipLength: number,
      isVertical: boolean
    ) => {
      return (
        getPossiblePositions({
          shipLength,
          boardLength: size,
          isVertical,
        }).includes(startCoordinate) &&
        freeCoordinates.includes(startCoordinate)
      );
    };

    const areAllCoordinatesAvailable = (coordinates: string[]) => {
      return coordinates.every((c) => freeCoordinates.includes(c));
    };

    const updateFreeCoordinates = (coordinates: string[]) => {
      const forbiddenCoordinates = genNearbyCoordinates(coordinates);
      freeCoordinates = freeCoordinates.filter(
        (c) => !forbiddenCoordinates.includes(c)
      );
    };

    const validateCoordinates = (
      startCoordinate: string,
      shipLength: number,
      isVertical: boolean
    ) => {
      if (!isStartCoordinateValid(startCoordinate, shipLength, isVertical))
        return;
      const shipCoordinates = generateShipCoordinates({
        shipLength,
        startCoordinate,
        isVertical,
      });
      if (!areAllCoordinatesAvailable(shipCoordinates)) return;
      return shipCoordinates;
    };

    const addShip = ({
      shipLength,
      isVertical,
      startCoordinate,
    }: AddShipArgs) => {
      const validCoordinates = validateCoordinates(
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

    return { getBoardMatrix, addShip, getShips };
  };

  return board;
};

export default setupBoard;
