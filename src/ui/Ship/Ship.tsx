import { ShipClass } from "@/types/shipTypes";
import React from "react";
import Draggable from "react-draggable";

interface CellProps {
  shipClass: ShipClass;
}

const Ship: React.FC<CellProps> = ({ shipClass }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("shipClass", JSON.stringify(shipClass));
    e.dataTransfer.effectAllowed = "move"; // Only allow moving
  };

  const shipCellsArray = Array.from({ length: shipClass.length }, (_, i) => i);

  const shipCells = shipCellsArray.map((i) => (
    <div
      key={i}
      className="bg-white rounded-none border border-black h-12 w-12"
    ></div>
  ));

  return (
    <div draggable onDragStart={handleDragStart} className="max-h-fit">
      {shipCells}
    </div>
  );
};

export default Ship;
