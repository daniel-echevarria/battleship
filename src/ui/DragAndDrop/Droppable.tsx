import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const handleDragEnter = (e) => {
    e.target.classList.add("bor");
  };

  return (
    <div ref={setNodeRef} className="flex items-center justify-center ">
      {children}
    </div>
  );
};

export default Droppable;
