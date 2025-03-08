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
  placedShipIds,
  setPlacedShipIds,
  hasShip,
  setupBoard,
}) => {
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

  const handleDrop = (e) => {
    setGrabbedShipInfo({ ...grabbedShipInfo, potentialStart: "" });
    if (!isValidPosition) return;
    const shipCoordinates = genShipCoordinates({
      length: grabbedShipInfo.length,
      startCoordinate: grabbedShipInfo.potentialStart,
      isVertical: grabbedShipInfo.isVertical,
    });
    setupBoard.addShip(shipCoordinates);
    setPlacedShipIds([...placedShipIds, grabbedShipInfo.id]);
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
        onDrop={(e) => handleDrop(e)}
        id={id}
      ></div>
    </>
  );
};

export default Cell;
