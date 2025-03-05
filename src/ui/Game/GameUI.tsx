import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React from "react";
import SetupBoard from "../SetupBoard/SetupBoardUI";

interface GameProps {
  boardSize: number;
}

const Game: React.FC<GameProps> = ({ boardSize }) => {
  const mySetupBoardFactory = setupBoardFactory();
  const mySetupBoard = mySetupBoardFactory(boardSize);

  return (
    <main className="flex border border-red-400 items-center justify-center h-screen">
      <SetupBoard setupBoard={mySetupBoard} />
    </main>
  );
};

export default Game;
