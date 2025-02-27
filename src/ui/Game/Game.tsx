import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React from "react";
import SetupBoard from "../SetupBoard/SetupBoard";

interface GameProps {
  boardSize: number;
}

const Game: React.FC<GameProps> = ({ boardSize }) => {
  const mySetupBoardFactory = setupBoardFactory();
  const mySetupBoard = mySetupBoardFactory(boardSize);
  return (
    <main className="flex m-auto">
      <SetupBoard setupBoard={mySetupBoard} />
    </main>
  );
};

export default Game;
