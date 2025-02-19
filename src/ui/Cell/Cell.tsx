import React from "react";

interface CellProps {
  id: string;
}

const Cell: React.FC<CellProps> = ({ id }) => {
  const handleDragEnter = (e) => {
    e.target.classList.add("bor");
  };
  return (
    <>
      <div
        role="gridcell"
        className="bg-blue-400 hover:bg-blue-300 rounded-none border-white h-12 w-12 "
        onDragEnter={(e) => handleDragEnter(e)}
        id={id}
      ></div>
    </>
  );
};

export default Cell;
