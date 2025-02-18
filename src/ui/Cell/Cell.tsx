import React from "react";

interface CellProps {
  text: string;
}

const Cell: React.FC<CellProps> = ({ text }) => {
  return (
    <>
      <button role="gridcell"> {text} </button>
    </>
  );
};

export default Cell;
