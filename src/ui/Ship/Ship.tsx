import { ShipClass } from "@/types/shipTypes";
import React from "react";

interface CellProps {
  shipClass: ShipClass;
}

const Ship: React.FC<CellProps> = ({ shipClass }) => {
  return (
    <>
      <div
        className="bg-white rounded-none border-white h-12 w-12 cursor-grab"
        draggable
        role="ship"
      ></div>
    </>
  );
};

export default Ship;
