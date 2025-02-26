import { ShipClass } from "@/types/shipTypes";
import calculateGrabOffset from "@/utils/calculateGrabOffset";
import React from "react";

interface CellProps {
  shipClass: ShipClass;
}

// Algo to calculate hovered cells.
// Given a ship determine how many cells above is the top of the ship
// from that top hover as many cells as the length of the ship

const Ship: React.FC<CellProps> = ({ shipClass }) => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData("shipClass", JSON.stringify(shipClass));
    e.dataTransfer.effectAllowed = "move"; // Only allow moving
    const target = e.target as HTMLElement;
    const { top, left, height } = target.getBoundingClientRect();
    const cellSize = height / shipClass.length;
    const relativeMouseCoordinate = e.clientY - top;
    const grabbedCellIndex = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipClass.length
    );
    console.log(grabbedCellIndex);
    console.log(e.clientX, top, left);
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
