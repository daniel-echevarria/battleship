import { SetupBoard } from "@/types";

const playBoardFactory = (setupBoard: SetupBoard) => {
  const playBoard = () => {
    const ships = setupBoard.getShips();
    let hits: Set<string> = new Set();
    let missed: Set<string> = new Set();
    const receiveHit = (coordinate: string) => {
      ships.forEach((s) => {
        const shipHit = s.receiveHit(coordinate);
        shipHit ? hits.add(shipHit) : missed.add(coordinate);
      });
    };
    const getMissed = () => missed;
    const getHits = () => hits;
    return { receiveHit, getHits, getMissed };
  };
  return playBoard;
};

export default playBoardFactory;
