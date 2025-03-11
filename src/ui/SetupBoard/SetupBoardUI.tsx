import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React, { useState } from "react";
import Cell from "../Cell/CellUI";
import Ship from "../Ship/ShipUI";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import genNearbyCoordinates from "@/utils/coordinatesGeneration/genNearbyCoordinates";
import { useEffect } from "react";

// Algo to check for if ships are placed.
// Given a list of shipClasses.
// Display a ship for each that is not placed.
// after placing a ship, change is placed to true

const SetupBoardUI = ({ player }) => {
  const [setupBoard, setSetupBoard] = useState(player.setupBoard);

  const [ships, setShips] = useState(player.ships);
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
        hasShip={getCellsWithShips().includes(coo)}
        setupBoard={setupBoard}
        ships={ships}
        setShips={setShips}
      />
    );
  });

  const notPlacedShipsList = ships.map((ship) => {
    if (!ship.isPlaced) {
      return (
        <Ship
          key={ship.id}
          shipClass={ship}
          grabbedShipInfo={grabbedShipInfo}
          setGrabbedShipInfo={setGrabbedShipInfo}
        />
      );
    }
  });

  const areAllShipsPlaced = ships.every((ship) => ship.isPlaced);

  const handleRandomPlacement = () => {
    const areAllPlaced = player.ships.every((s) => s.isPlaced);
    console.log(areAllPlaced);
    if (areAllPlaced) return;
    player.randomlyPlaceShips();
    setSetupBoard({ ...player.setupBoard });
  };

  return (
    <>
      <div className="bg-yellow-300 flex gap-11">
        {areAllShipsPlaced && <button>Start Game</button>}
        <div className="flex gap-5 w-80">{notPlacedShipsList}</div>
      </div>
      <div className="grid grid-cols-10 ">{cellList}</div>
      <button onClick={handleRandomPlacement} className="bg-purple-300">
        Random
      </button>
    </>
  );
};

export default SetupBoardUI;
