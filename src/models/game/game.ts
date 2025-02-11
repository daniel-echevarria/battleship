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

  return {
    currentPlayer,
    isGameOver,
    players,
  };
};

export default gameFactory;
