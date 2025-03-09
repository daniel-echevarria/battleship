import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/CellUI";
import Ship from "../Ship/ShipUI";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import genNearbyCoordinates from "@/utils/coordinatesGeneration/genNearbyCoordinates";
import { CanShipGoThereArgs } from "@/types/boardTypes";

const SetupBoardUI = ({ setupBoard, ships }) => {
  const [placedShipIds, setPlacedShipIds] = React.useState([]);
  const [grabbedShipInfo, setGrabbedShipInfo] = React.useState({
    potentialStart: "",
    grabOffset: null,
    length: 0,
    isVertical: true,
    id: "",
  });

  const getShipHoveredCells = () => {
    if (grabbedShipInfo.potentialStart === "") return [];
    const shipCoordinates = genShipCoordinates({
      length: grabbedShipInfo.length,
      startCoordinate: grabbedShipInfo.potentialStart,
      isVertical: grabbedShipInfo.isVertical,
    });
    return genNearbyCoordinates(shipCoordinates);
  };

  const isValidPosition = setupBoard.canShipGoThere({
    coordinate: grabbedShipInfo.potentialStart,
    length: grabbedShipInfo.length,
    isVertical: grabbedShipInfo.isVertical,
  });

  const getCellsWithShips = () => {
    const placedShipsCoordinates = setupBoard
      .getShips()
      .map((ship) => ship.getCoordinates());
    return placedShipsCoordinates.flat();
  };

  const coordinates = genBoardCoordinates(setupBoard.size, setupBoard.size);

  const cellList = coordinates.map((coo) => {
    return (
      <Cell
        id={coo}
        key={coo}
        setGrabbedShipInfo={setGrabbedShipInfo}
        grabbedShipInfo={grabbedShipInfo}
        isHovered={getShipHoveredCells().includes(coo)}
        isValidPosition={isValidPosition}
        placedShipIds={placedShipIds}
        setPlacedShipIds={setPlacedShipIds}
        hasShip={getCellsWithShips().includes(coo)}
        setupBoard={setupBoard}
      />
    );
  });

  const notPlacedShipsList = ships.map((shipClass) => {
    if (!placedShipIds.includes(shipClass.id)) {
      return (
        <Ship
          key={shipClass.id}
          shipClass={shipClass}
          grabbedShipInfo={grabbedShipInfo}
          setGrabbedShipInfo={setGrabbedShipInfo}
        />
      );
    }
  });

  const areAllShipsPlaced = ships.length === placedShipIds.length;

  return (
    <>
      <div className="bg-yellow-300 flex gap-11">
        {areAllShipsPlaced && <button>Start Game</button>}
        <div className="flex gap-5 w-80">{notPlacedShipsList}</div>
      </div>
      <div className="grid grid-cols-10 ">{cellList}</div>
    </>
  );
};

export default SetupBoardUI;
