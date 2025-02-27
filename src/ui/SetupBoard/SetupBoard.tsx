import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/Cell";
import Ship from "../Ship/Ship";
import shipClasses from "@/data/shipClasses";
import { calculateStartShip } from "@/utils/calculateStartShip";

// Algo for correctly show hovered cells:
// On drag enter, calculate the potential starting coordinate of the ship
// Calculate the hovered cells based on the length of the ship
// Apply the hover effect to the cells
// on drag leave, remove the hover effect from the cells

const SetupBoard = ({ setupBoard }) => {
  const [potentialShipStart, setPotentialShipStart] = React.useState("");
  const [shipGrabOffset, setShipGrabOffset] = React.useState(0);
  const coordinates = genBoardCoordinates(setupBoard.size, setupBoard.size);
  const cellList = coordinates.map((coo) => {
    return (
      <Cell
        id={coo}
        key={coo}
        setPotentialShipStart={setPotentialShipStart}
        shipGrabOffset={shipGrabOffset}
        isStartCoordinate={potentialShipStart === coo}
      />
    );
  });

  return (
    <>
      <Ship shipClass={shipClasses[0]} setShipGrabOffset={setShipGrabOffset} />
      <Ship shipClass={shipClasses[1]} setShipGrabOffset={setShipGrabOffset} />
      <div role="grid" className="grid grid-cols-10">
        {cellList}
      </div>
    </>
  );
};

export default SetupBoard;
