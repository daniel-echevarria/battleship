import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React from "react";
import SetupBoard from "../SetupBoard/SetupBoard";
import Ship from "../Ship/Ship";
import shipClasses from "@/data/shipClasses";

interface GameProps {
  boardSize: number;
}

const Game: React.FC<GameProps> = ({ boardSize }) => {
  const mySetupBoardFactory = setupBoardFactory();
  const mySetupBoard = mySetupBoardFactory(boardSize);
  return (
    <main className="flex m-auto">
      <Ship shipClass={shipClasses[0]} />
      <SetupBoard setupBoard={mySetupBoard} />
    </main>
  );
};

export default Game;
