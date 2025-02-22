import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`${
        isOver ? "bg-green-400" : "bg-blue-400"
      } flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Droppable;
