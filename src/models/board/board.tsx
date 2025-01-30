import { Ship } from "@/types";
import shipFactory from "../ship/ship";
import generateShipCoordinates from "@/utils/generateShipCoordinates";
import getPossiblePositions from "@/utils/getPossiblePositions";
import generateCoordinates from "@/utils/generateCoordinates";

type AddShipArgs = {
  shipLength: number;
  isVertical: boolean;
  startCoordinate: string;
};

const boardFactory = () => {
  const board = (size: number) => {
    let boardMatrix = Array(size)
      .fill(0)
      .map((x) => Array(size).fill(""));
    let ships: Ship[] = [];
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

    const addShip = ({
      shipLength,
      isVertical,
      startCoordinate,
    }: AddShipArgs) => {
      if (!isStartCoordinateValid(startCoordinate, shipLength, isVertical))
        return;
      const shipCoordinates = generateShipCoordinates({
        shipLength,
        startCoordinate,
        isVertical,
      });
      const myShipFactory = shipFactory();
      const shipOne = myShipFactory(shipCoordinates);
      ships.push(shipOne);
      freeCoordinates = freeCoordinates.filter(
        (x) => !shipCoordinates.includes(x)
      );
    };

    const getShips = () => ships;
    const getBoardMatrix = () => boardMatrix;

    return { getBoardMatrix, addShip, getShips };
  };

  return board;
};

export default boardFactory;
