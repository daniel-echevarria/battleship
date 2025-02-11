import { ShipClass } from "@/types";
import { PlaceShipArgs, PlayerArgs } from "@/playerTypes";
import generateShipCoordinates from "@/utils/generateShipCoordinates";
import getValidUserCoordinate from "@/utils/getValidUserCoordinate";

const playerFactory = () => {
  let id = 0;
  const player = ({ setupBoard, playBoard, name, ships }: PlayerArgs) => {
    const playerId = ++id;
    const playerName = name;
    const hasWon = () => {
      return playBoard.areAllShipsDestroyed();
    };

    const genValidCoordinates = (
      shipClass: ShipClass,
      isVertical: boolean,
      coordinate: string
    ) => {
      if (!setupBoard.canShipGoThere({ shipClass, isVertical, coordinate }))
        return;

      const shipCoordinates = generateShipCoordinates({
        length: shipClass.length,
        isVertical,
        startCoordinate: coordinate,
      });

      if (shipCoordinates) return shipCoordinates;
    };

    const placeShip = async ({
      shipClass,
      isVertical,
      inputProvider,
    }: PlaceShipArgs) => {
      const coordinate = await getValidUserCoordinate({
        inputProvider,
        validCoordinates: setupBoard.freeCoordinates,
      });
      if (!coordinate) return;

      const validCoordinates = genValidCoordinates(
        shipClass,
        isVertical,
        coordinate
      );

      if (validCoordinates) setupBoard.addShip(validCoordinates);
    };

    return { playerId, playerName, hasWon, setupBoard, placeShip };
  };
  return player;
};

export default playerFactory;
