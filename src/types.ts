type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | false;
};

type SetupBoard = {
  boardId: number;
  size: number;
  freeCoordinates: string[];
  areAllCoordinatesAvailable: (arg0: string[]) => boolean;
  getShips: () => Ship[];
  getBoardMatrix: () => string[][];
  addShip: (arg0: string[]) => Ship;
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
  setupBoard: SetupBoard;
};

type requestShipPlacementArgs = {
  shipClass: ShipClass;
  player: Player;
  coordinateProvider: () => string;
  orientationProvider: () => boolean;
};

type GetValidUserCoordinateParams = {
  inputProvider: () => Promise<string>;
  validCoordinates: string[];
};

type Game = {
  currentPlayer: Player;
  players: Player[];
  isGameOver: () => boolean;
  getUserCoordinate: ({
    inputProvider,
    availableCoordinates,
  }: GetUserCoordinateParams) => string | false;
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
  Game,
  requestShipPlacementArgs,
  GetValidUserCoordinateParams,
};
