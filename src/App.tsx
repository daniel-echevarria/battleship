import React from "react";
import { useState } from "react";
import Game from "./ui/Game/Game";

const App = () => {
  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <Game boardSize={10} />
    </>
  );
};

export default App;
