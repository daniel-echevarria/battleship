import { SetupBoard, ShipClass } from "@/types";

type PlaceShipArgs = {
  shipClass: ShipClass;
  coordinate: string;
  isVertical: boolean;
};
const playerFactory = () => {
  const player = (board: SetupBoard) => {
    const playerBoard = board;
    const placeShip = ({
      shipClass,
      coordinate,
      isVertical,
    }: PlaceShipArgs) => {
      playerBoard.addShip({
        length: shipClass.length,
        isVertical,
        startCoordinate: coordinate,
      });
    };

    const getBoard = () => playerBoard;

    return { placeShip, getBoard };
  };
  return player;
};

export default playerFactory;
