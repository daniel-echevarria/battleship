import { Ship } from "@/types";
import shipFactory from "../ship/ship";
import generateCoordinates from "@/utils/generateCoordinates";
import genNearbyCoordinates from "@/utils/genNearbyCoordinates";

const setupBoardFactory = () => {
  let id = 0;

  const setupBoard = (size: number) => {
    let freeCoordinates = generateCoordinates(size, size);
    const boardId = ++id;
    const myShipFactory = shipFactory();
    const ships: Ship[] = [];
    const boardMatrix = Array(size)
      .fill(0)
      .map((x) => Array(size).fill(""));

    const areAllCoordinatesAvailable = (coordinates: string[]) => {
      return coordinates.every((c) => freeCoordinates.includes(c));
    };

    const addShip = (coordinates: string[]) => {
      const shipOne = myShipFactory(coordinates);
      ships.push(shipOne);
      removeOccupiedCoordinates(coordinates);
      return shipOne;
    };

    // Removes ship's coordinates and the nearby coordinates from the freeCoordinates array
    const removeOccupiedCoordinates = (coordinates: string[]) => {
      const forbiddenCoordinates = genNearbyCoordinates(coordinates);
      freeCoordinates = freeCoordinates.filter(
        (c) => !forbiddenCoordinates.includes(c)
      );
    };

    const getShips = () => ships;
    const getBoardMatrix = () => boardMatrix;

    return {
      getBoardMatrix,
      addShip,
      getShips,
      size,
      boardId,
      freeCoordinates,
      areAllCoordinatesAvailable,
    };
  };

  return setupBoard;
};

export default setupBoardFactory;
