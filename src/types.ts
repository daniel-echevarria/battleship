type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | undefined;
};

type AddShipArgs = {
  length: number;
  isVertical: boolean;
  startCoordinate: string;
};

type SetupBoard = {
  boardId: number;
  size: number;
  getShips: () => Ship[];
  getBoardMatrix: () => string[][];
  addShip: ({ length, isVertical, startCoordinate }: AddShipArgs) => void;
};

type PlayBoard = {};

type ShipClass = {
  name: string;
  length: number;
};

export { Ship, ShipClass, SetupBoard, PlayBoard };
