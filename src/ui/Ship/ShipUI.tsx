import { ShipClass } from "@/types/shipTypes";
import calculateGrabOffset from "@/utils/calculateGrabOffset";
import React from "react";

interface ShipProps {
  shipClass: ShipClass;
  setShipGrabOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Ship: React.FC<ShipProps> = ({
  shipClass,
  grabbedShipInfo,
  setGrabbedShipInfo,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData("shipClass", JSON.stringify(shipClass));
    e.dataTransfer.effectAllowed = "move"; // Only allow moving
    setGrabbedShipInfo({
      ...grabbedShipInfo,
      length: shipClass.length,
      grabOffset: getGrabbedCellIndex(e),
    });
  };

  const getGrabbedCellIndex = (e) => {
    const target = e.target as HTMLElement;
    const { top, left, height } = target.getBoundingClientRect();
    const cellSize = height / shipClass.length;
    const relativeMouseCoordinate = e.clientY - top;
    return calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipClass.length
    );
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
