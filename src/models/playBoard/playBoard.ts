import { SetupBoard } from "@/types";
import generateCoordinates from "@/utils/generateCoordinates";

const playBoardFactory = () => {
  const playBoard = (setupBoard: SetupBoard) => {
    const ships = setupBoard.getShips();
    let hits: Set<string> = new Set();
    let missed: Set<string> = new Set();
    let possibleAttacks: Set<string> = new Set(
      generateCoordinates(setupBoard.size, setupBoard.size)
    );
    const receiveHit = (coordinate: string) => {
      const hitShip = ships.find((s) => s.receiveHit(coordinate));
      hitShip ? hits.add(coordinate) : missed.add(coordinate);
      possibleAttacks.delete(coordinate);
    };

    const areAllShipsDestroyed = () => {
      return ships.every((s) => s.isDestroyed());
    };

    const getPossibleAttacks = () => possibleAttacks;
    const getMissed = () => missed;
    const getHits = () => hits;
    return {
      receiveHit,
      getHits,
      getMissed,
      getPossibleAttacks,
      areAllShipsDestroyed,
    };
  };
  return playBoard;
};

export default playBoardFactory;
