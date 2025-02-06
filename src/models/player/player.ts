import { PlaceShipArgs, PlayerArgs } from "@/types";

const playerFactory = () => {
  let id = 0;
  const player = ({ setupBoard, playBoard, name }: PlayerArgs) => {
    const playerId = ++id;
    const playerName = name;
    const strategicBoard = setupBoard;
    const hasWon = () => {
      return playBoard.areAllShipsDestroyed();
    };
    const placeShip = ({
      shipClass,
      coordinate,
      isVertical,
    }: PlaceShipArgs) => {
      strategicBoard.addShip({
        length: shipClass.length,
        isVertical,
        startCoordinate: coordinate,
      });
    };

    return { playerId, placeShip, playerName, hasWon };
  };
  return player;
};

export default playerFactory;
