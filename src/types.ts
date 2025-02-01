type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | undefined;
};

type SetupBoard = {
  boardId: number;
  size: number;
  getShips: () => Ship[];
  getBoard: () => string[][];
  getMissed: () => string[];
};

type PlayBoard = {};

type ShipClass = {
  name: string;
  size: number;
};

export { Ship, ShipClass, SetupBoard, PlayBoard };
