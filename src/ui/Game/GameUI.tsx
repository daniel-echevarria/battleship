import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React, { useState } from "react";
import SetupBoardUI from "../SetupBoard/SetupBoardUI";
import playerFactory from "@/models/player/player";
import playBoardFactory from "@/models/playBoard/playBoard";
import shipClasses from "@/data/shipClasses";

interface GameProps {
  boardSize: number;
}

const mySetupBoardFactory = setupBoardFactory();
const myPlayBoardFactory = playBoardFactory();
const myPlayerFactory = playerFactory();

const Game: React.FC<GameProps> = ({ boardSize }) => {
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
    <main className="flex border border-red-400 items-center justify-center h-screen bg-yellow-800">
      <SetupBoardUI player={playerOne} />
    </main>
  );
};

export default Game;
