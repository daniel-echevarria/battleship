import { Player } from "./playerTypes";

type Game = {
  currentPlayer: Player;
  players: Player[];
  isGameOver: () => boolean;
};

export { Game };
