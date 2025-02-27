import { calculateStartShip } from "@/utils/calculateStartShip";
import React from "react";

interface CellProps {
  id: string;
  setPotentialShipStart: React.Dispatch<React.SetStateAction<string>>;
  shipGrabOffset: number;
}

const Cell: React.FC<CellProps> = ({
  id,
  setPotentialShipStart,
  shipGrabOffset,
  isStartCoordinate,
}) => {
  const [cellColor, setCellColor] = React.useState("bg-blue-400");

  const handleDragEnter = (e) => {
    e.preventDefault(); // Necessary. Allows us to drop.
    const shipStart = calculateStartShip(e.target.id, shipGrabOffset, true);
    setPotentialShipStart(shipStart);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary. Allows us to drop.
    e.dataTransfer.dropEffect = "move"; // Show that the item will be moved
  };

  const handleDragLeave = (e) => {
    setCellColor("bg-blue-400");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedData = e.dataTransfer.getData("shipClass");
    setCellColor("bg-yellow-50");
  };

  return (
    <>
      <div
        role="gridcell"
        className={`${
          isStartCoordinate ? "bg-green-400" : "bg-blue-400"
        } rounded-none border border-white h-12 w-12 `}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
        id={id}
      ></div>
    </>
  );
};

export default Cell;
