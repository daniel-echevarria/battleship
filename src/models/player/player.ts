import { PlayerArgs } from "@/types";

const playerFactory = () => {
  let id = 0;
  const player = ({ setupBoard, playBoard, name }: PlayerArgs) => {
    const playerId = ++id;
    const playerName = name;
    const hasWon = () => {
      return playBoard.areAllShipsDestroyed();
    };
    // const placeShip = ({
    //   shipClass,
    //   coordinate,
    //   isVertical,
    // }: PlaceShipArgs) => {
    //   const placedShip = setupBoard.addShip({
    //     length: shipClass.length,
    //     isVertical,
    //     startCoordinate: coordinate,
    //   });
    //   return placedShip;
    // };

    return { playerId, playerName, hasWon, setupBoard };
  };
  return player;
};

export default playerFactory;
