import { Player } from "./playerTypes";

type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | false;
};

type ShipClass = {
  name: string;
  length: number;
};

type Game = {
  currentPlayer: Player;
  players: Player[];
  isGameOver: () => boolean;
};

export { Ship, ShipClass, Game };
