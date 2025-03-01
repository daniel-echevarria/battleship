import shipFactory from "../ship/ship";
import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import genNearbyCoordinates from "@/utils/coordinatesGeneration/genNearbyCoordinates";
import { Ship } from "@/types/shipTypes";
import { CanShipGoThereArgs } from "@/types/boardTypes";

const setupBoardFactory = () => {
  let id = 0;

  const setupBoard = (size: number) => {
    let freeCoordinates = genBoardCoordinates(size, size);
    const boardId = ++id;
    const myShipFactory = shipFactory();
    const ships: Ship[] = [];
    const boardMatrix = Array(size)
      .fill(0)
      .map((x) => Array(size).fill(""));

    const areAllCoordinatesAvailable = (coordinates: string[]) => {
      return coordinates.every((c) => freeCoordinates.includes(c));
    };

    const canShipGoThere = ({
      length,
      isVertical,
      startCoordinate,
    }: CanShipGoThereArgs) => {
      if (!startCoordinate) return false;

      const shipCoordinates = genShipCoordinates({
        length,
        isVertical,
        startCoordinate,
      });
      return areAllCoordinatesAvailable(shipCoordinates);
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
      canShipGoThere,
    };
  };

  return setupBoard;
};

export default setupBoardFactory;
