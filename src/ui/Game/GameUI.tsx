import setupBoardFactory from "@/models/setupBoard/setupBoard";
import React from "react";
<<<<<<< HEAD:src/ui/Game/Game.tsx
import SetupBoard from "../SetupBoard/SetupBoard";
=======
import SetupBoard from "../SetupBoard/SetupBoardUI";
>>>>>>> display-all-hover:src/ui/Game/GameUI.tsx

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
