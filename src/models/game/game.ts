import { Player, ShipClass } from "@/types";

type GameArgs = {
  players: Player[];
  shipClasses: ShipClass[];
};
const gameFactory = ({ players, shipClasses }: GameArgs) => {
  let currentPlayer = players[0];

  const isGameOver = () => {
    return false;
  };

  const getUserCoordinate = () => {
    return "a1";
  };

  return {
    getUserCoordinate,
    currentPlayer,
    isGameOver,
    players,
  };
};

export default gameFactory;
