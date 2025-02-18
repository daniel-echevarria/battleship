import React from "react";

interface CellProps {
  id: string;
}

const Cell: React.FC<CellProps> = ({ id }) => {
  return (
    <>
      <button
        role="gridcell"
        className="bg-blue-400 hover:bg-blue-300 rounded-none border-white h-12 w-12 "
        id={id}
      >
        {id}
      </button>
    </>
  );
};

export default Cell;
