import { Player, requestShipPlacementArgs, ShipClass } from "@/types";
import { sign } from "crypto";

const gameFactory = () => {
  const game = (players: Player[], shipClasses: ShipClass[]) => {
    let currentPlayer = players[0];

    const isGameOver = () => {
      return false;
    };

    const getUserInput = () => {};

    const requestShipPlacement = ({
      player,
      shipClass,
      inputProvider,
    }: requestShipPlacementArgs) => {
      let validInput;
      while (!validInput) {
        const coordinate = inputProvider();
        const placedShip = player.placeShip({
          shipClass,
          isVertical: true,
          coordinate,
        });
        validInput = placedShip;
      }
    };

    const shipPlacementLoop = (player: Player, shipClass: ShipClass) => {
      return shipClass;
    };
    const requestPlayerMove = () => {};

    const gameLoop = () => {};

    return {
      currentPlayer,
      isGameOver,
      players,
      requestShipPlacement,
      gameLoop,
    };
  };

  return game;
};

export default gameFactory;
