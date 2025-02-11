type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | false;
};

type InputProvider = () => Promise<string>;

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

type Player = {
  playerId: number;
  playerName: string;
  setupBoard: SetupBoard;
  hasWon: () => Boolean;
  placeShip: ({ shipClass, isVertical, inputProvider }: PlaceShipArgs) => void;
};

type PlaceShipArgs = {
  shipClass: ShipClass;
  isVertical: boolean;
  inputProvider: InputProvider;
};

type requestShipPlacementArgs = {
  shipClass: ShipClass;
  player: Player;
  coordinateProvider: () => string;
  orientationProvider: () => boolean;
};

type GetValidUserCoordinateArgs = {
  inputProvider: InputProvider;
  validCoordinates: string[];
};

type Game = {
  currentPlayer: Player;
  players: Player[];
  isGameOver: () => boolean;
};

type AddShipArgs = {
  length: number;
  isVertical: boolean;
  startCoordinate: string;
};

type PlayerArgs = {
  setupBoard: SetupBoard;
  playBoard: PlayBoard;
  name: string;
};

type CanShipGoThereArgs = {
  shipClass: ShipClass;
  isVertical: boolean;
  coordinate: string | undefined;
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
  Game,
  requestShipPlacementArgs,
  GetValidUserCoordinateArgs as GetValidUserCoordinateParams,
  CanShipGoThereArgs as CanShipGoThereParams,
};
