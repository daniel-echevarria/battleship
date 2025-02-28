import React from "react";
import { useState } from "react";
import Game from "./ui/Game/GameUI";

const App = () => {
  return (
    <div className="grid grid-rows-[100px_1fr_50px] grid-cols-1 bg-yellow-400 h-screen w-screen">
      <header></header>
      <Game boardSize={10} />
      <footer></footer>
    </div>
  );
};

export default App;
