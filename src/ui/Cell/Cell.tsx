import React from "react";

interface CellProps {
  id: string;
}

const Cell: React.FC<CellProps> = ({ id, children }) => {
  const handleDragEnter = (e) => {
    e.target.classList.add("bor");
  };
  return (
    <>
      <div
        role="gridcell"
        className="bg-transparent h-14 w-14 flex justify-center items-center border border-white "
        onDragEnter={(e) => handleDragEnter(e)}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default Cell;
