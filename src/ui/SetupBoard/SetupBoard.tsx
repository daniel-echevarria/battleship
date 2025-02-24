import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/Cell";

const SetupBoard = ({ setupBoard }) => {
  const coordinates = genBoardCoordinates(setupBoard.size, setupBoard.size);
  const cellList = coordinates.map((coo) => {
    return <Cell id={coo} key={coo} />;
  });
  return (
    <div role="grid" className="grid grid-cols-10">
      {cellList}
    </div>
  );
};

export default SetupBoard;
