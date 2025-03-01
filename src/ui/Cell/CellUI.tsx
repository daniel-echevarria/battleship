import { calculateStartShip } from "@/utils/calculateStartShip";
import React from "react";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";

interface CellProps {
  id: string;
  setPotentialShipStart: React.Dispatch<React.SetStateAction<string>>;
  shipGrabOffset: number;
}

const Cell: React.FC<CellProps> = ({
  id,
  grabbedShipInfo,
  setGrabbedShipInfo,
  isHovered,
  isValidPosition,
  placedShips,
  setPlacedShips,
  hasShip,
}) => {
  // const [cellColor, setCellColor] = React.useState("bg-blue-400");

  const handleDragEnter = (e) => {
    e.preventDefault(); // Necessary. Allows us to drop.
    const shipStart = calculateStartShip(
      e.target.id,
      grabbedShipInfo.grabOffset,
      true
    );
    setGrabbedShipInfo({ ...grabbedShipInfo, potentialStart: shipStart });
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary. Allows us to drop.
    e.dataTransfer.dropEffect = "move"; // Show that the item will be moved
  };

  const handleDragLeave = (e) => {
    // setCellColor("bg-blue-400");
  };

  const handleDrop = (e) => {
    const shipCells = genShipCoordinates({
      length: grabbedShipInfo.length,
      startCoordinate: grabbedShipInfo.potentialStart,
      isVertical: grabbedShipInfo.isVertical,
    });
    // const shipData = e.dataTransfer.getData("shipClass");
    // console.log(shipData);
    setGrabbedShipInfo({ ...grabbedShipInfo, potentialStart: "" });
    setPlacedShips([...placedShips, shipCells]);
    e.preventDefault();
  };

  const hoveredCellColor = () => {
    return isValidPosition ? "bg-green-400" : "bg-red-400";
  };

  const determineCellColor = () => {
    return hasShip
      ? "bg-yellow-50 border-blue-950"
      : "bg-blue-400 border-white";
  };

  return (
    <>
      <div
        role="gridcell"
        className={`${
          isHovered ? hoveredCellColor() : determineCellColor()
        } rounded-none border h-12 w-12 `}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        // onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
        id={id}
      ></div>
    </>
  );
};

export default Cell;
