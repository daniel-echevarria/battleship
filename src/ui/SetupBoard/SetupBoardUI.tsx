import genBoardCoordinates from "@/utils/coordinatesGeneration/genBoardCoordinates";
import React from "react";
import Cell from "../Cell/CellUI";
import Ship from "../Ship/ShipUI";
import shipClasses from "@/data/shipClasses";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import genNearbyCoordinates from "@/utils/coordinatesGeneration/genNearbyCoordinates";

// Algo for correctly show hovered cells:
// On drag enter, calculate the potential starting coordinate of the ship
// Calculate the hovered cells based on the length of the ship
// Apply the hover effect to the cells
// on drag leave, remove the hover effect from the cells

const SetupBoard = ({ setupBoard }) => {
  const [placedShips, setPlacedShips] = React.useState([]);
  const [grabbedShipInfo, setGrabbedShipInfo] = React.useState({
    potentialStart: "",
    grabOffset: null,
    length: 0,
    isVertical: true,
    id: "",
  });

  const getShipHoveredCells = () => {
    const shipCoordinates = genShipCoordinates({
      length: grabbedShipInfo.length,
      startCoordinate: grabbedShipInfo.potentialStart,
      isVertical: grabbedShipInfo.isVertical,
    });
    return genNearbyCoordinates(shipCoordinates);
  };

  const isValidPosition = setupBoard.canShipGoThere({
    startCoordinate: grabbedShipInfo.potentialStart,
    length: grabbedShipInfo.length,
    isVertical: grabbedShipInfo.isVertical,
  });

  const getCellsWithShips = () => {
    const placedShipsCoordinates = placedShips.map((ship) => ship.coordinates);
    return placedShipsCoordinates.flat();
  };

  console.log(placedShips);

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
        placedShips={placedShips}
        setPlacedShips={setPlacedShips}
        hasShip={getCellsWithShips().includes(coo)}
      />
    );
  });

  const notPlacedShipsList = shipClasses.map((shipClass, i) => {
    if (!placedShips.includes(shipClass.id)) {
      return (
        <Ship
          key={i}
          shipClass={shipClass}
          grabbedShipInfo={grabbedShipInfo}
          setGrabbedShipInfo={setGrabbedShipInfo}
        />
      );
    }
  });

  return (
    <>
      {notPlacedShipsList}
      <div role="grid" className="grid grid-cols-10">
        {cellList}
      </div>
    </>
  );
};

export default SetupBoard;
