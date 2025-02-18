import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/Cell";

const SetupBoard = ({ setupBoard }) => {
  const coordinates = genBoardCoordinates(setupBoard.size, setupBoard.size);
  const cellList = coordinates.map((coo) => {
    return <Cell text={coo} />;
  });
  return <div role="grid">{cellList}</div>;
};

export default SetupBoard;
