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

type Game = {
  currentPlayer: Player;
  isGameOver: () => boolean;
  players: Player[];
  gameLoop: () => void;
  requestShipPlacement: ({
    shipClass,
    player,
    coordinateProvider,
    orientationProvider,
  }: requestShipPlacementArgs) => void;
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
};
