import { BlobOptions } from "buffer";

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

type PlayBoard = {
  areAllShipsDestroyed: () => boolean;
};

type PlaceShipArgs = {
  shipClass: ShipClass;
  coordinate: string;
  isVertical: boolean;
};

type Player = {
  playerId: number;
  playerName: string;
  hasWon: () => Boolean;
  placeShip: ({ shipClass, coordinate, isVertical }: PlaceShipArgs) => void;
};

type ShipClass = {
  name: string;
  length: number;
};

export { Ship, ShipClass, SetupBoard, PlayBoard, Player, PlaceShipArgs };
