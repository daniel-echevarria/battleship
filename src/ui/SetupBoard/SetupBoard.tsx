import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/Cell";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../DragAndDrop/Draggable";
import { useState } from "react";
import Droppable from "../DragAndDrop/Droppable";
import shipClasses from "@/data/shipClasses";
import Ship from "../Ship/Ship";

const SetupBoard = ({ setupBoard }) => {
  const coordinates = genBoardCoordinates(setupBoard.size, setupBoard.size);
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <Ship shipClass={shipClasses[0]} />
    </Draggable>
  );

  const cellList = coordinates.map((coo) => {
    return (
      <Droppable id={coo} key={coo}>
        {parent === coo ? draggableMarkup : <Cell id={coo} />}
      </Droppable>
    );
  });

  const handleDragEnd = (event: any) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      <div role="grid" className="grid grid-cols-10 ">
        {cellList}
      </div>
    </DndContext>
  );
};

export default SetupBoard;
