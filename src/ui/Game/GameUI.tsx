import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React from "react";
import SetupBoardUI from "../SetupBoard/SetupBoardUI";
import playerFactory from "@/models/player/player";
import playBoardFactory from "@/models/playBoard/playBoard";
import shipClasses from "@/data/shipClasses";
import { a } from "vitest/dist/chunks/suite.qtkXWc6R";

interface GameProps {
  boardSize: number;
}

const Game: React.FC<GameProps> = ({ boardSize }) => {
  const mySetupBoardFactory = setupBoardFactory();
  const myPlayBoardFactory = playBoardFactory();
  const myPlayerFactory = playerFactory();

  const playerOneSetupBoard = mySetupBoardFactory(boardSize);
  const playerOnePlayBoard = myPlayBoardFactory(playerOneSetupBoard);

  const playerOne = myPlayerFactory({
    setupBoard: playerOneSetupBoard,
    playBoard: playerOnePlayBoard,
    name: "Player 1",
    isHuman: true,
    shipClasses: shipClasses,
  });

  return (
    <main className="flex border border-red-400 items-center justify-center h-screen">
      <SetupBoardUI setupBoard={playerOneSetupBoard} ships={playerOne.ships} />
    </main>
  );
};

export default Game;
