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
  getBoardMatrix: () => string[][];
  addShip: ({ length, isVertical, startCoordinate }: AddShipArgs) => void;
};

type PlayBoard = {
  receiveHit: (arg0: string) => void;
  getHits: () => Set<string>;
  getMissed: () => Set<string>;
  getPossibleAttacks: () => Set<string>;
  areAllShipsDestroyed: () => boolean;
};

type Player = {
  playerId: number;
  playerName: string;
  hasWon: () => Boolean;
  placeShip: ({ shipClass, coordinate, isVertical }: PlaceShipArgs) => void;
};

type AddShipArgs = {
  length: number;
  isVertical: boolean;
  startCoordinate: string;
};

type PlaceShipArgs = {
  shipClass: ShipClass;
  coordinate: string;
  isVertical: boolean;
};

type PlayerArgs = {
  setupBoard: SetupBoard;
  playBoard: PlayBoard;
  name: string;
};

type ShipClass = {
  name: string;
  length: number;
};

export {
  Ship,
  ShipClass,
  SetupBoard,
  PlayBoard,
  Player,
  PlaceShipArgs,
  PlayerArgs,
  AddShipArgs,
};
