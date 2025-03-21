import { Player } from "@/types/playerTypes";
import { ShipClass } from "@/types/shipTypes";

type GameArgs = {
  players: Player[];
  shipClasses: ShipClass[];
};
const gameFactory = ({ players }: GameArgs) => {
  let currentPlayer = players[0];
  let gameStarted = false;

  const isGameOver = () => {
    return false;
  };

  const requestShipsPlacement = () => {
    players.forEach((p) => {
      p.isHuman ? "ui for player placing ships" : p.randomlyPlaceShips();
    });
  };

  return {
    currentPlayer,
    isGameOver,
    players,
    requestShipsPlacement,
  };
};

export default gameFactory;

// Algo
// SETUP PART:
// create one setup board for each player
// create a play board for each player (using the opponent board)
// create the 2 players with their respective boards
// request players to place their ships
// if the player isn't human place them randomly
// if the player is human give option to grab or to place randomly
// PLAY PART:
// Ask player one to play a move
// If the play is human request a click on a cell
// if the player isn't human select a random coordinate
// Check if the player won the game
// if not loop the play part with the other player
// if yes go to GAME OVER
// GAME OVER PART:
// Display game over message
// Offer to play again
