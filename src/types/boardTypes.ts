import { Ship, ShipClass } from "./types/types";

type SetupBoard = {
  boardId: number;
  size: number;
  freeCoordinates: string[];
  getShips: () => Ship[];
  getBoardMatrix: () => string[][];
  addShip: (arg0: string[]) => Ship;
  areAllCoordinatesAvailable: (arg0: string[]) => boolean;
  canShipGoThere: ({
    shipClass,
    isVertical,
    coordinate,
  }: CanShipGoThereArgs) => boolean;
};

type PlayBoard = {
  receiveHit: (arg0: string) => void;
  getHits: () => Set<string>;
  getMissed: () => Set<string>;
  getPossibleAttacks: () => Set<string>;
  areAllShipsDestroyed: () => boolean;
};

type CanShipGoThereArgs = {
  shipClass: ShipClass;
  isVertical: boolean;
  coordinate: string | undefined;
};

type AddShipArgs = {
  length: number;
  isVertical: boolean;
  startCoordinate: string;
};

export { SetupBoard, PlayBoard, AddShipArgs, CanShipGoThereArgs };
