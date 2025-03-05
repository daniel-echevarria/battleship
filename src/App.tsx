import React from "react";
import Game from "./ui/Game/GameUI";

const App = () => {
  return (
    <div className="">
      <header></header>
      <Game boardSize={10} />
      <footer></footer>
    </div>
  );
};

export default App;
