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
        className="bg-blue-400 h-14 w-14 flex justify-center items-center border border-white hover:bg-red-300"
        onDragEnter={(e) => handleDragEnter(e)}
        id={id}
      ></div>
    </>
  );
};

export default Cell;
