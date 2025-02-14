import { Ship, ShipClass } from "@/types";
import { PlaceShipArgs, PlayerArgs } from "@/playerTypes";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import getValidUserCoordinate from "@/utils/getValidUserCoordinate";
import selectRandomCoordinate from "@/utils/selectRandomCoordinate";

const playerFactory = () => {
  let id = 0;
  const player = ({
    setupBoard,
    playBoard,
    name,
    ships,
    isHuman,
  }: PlayerArgs) => {
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

      const shipCoordinates = genShipCoordinates({
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

    const randomlyPlaceShip = (shipClass: ShipClass) => {
      let keepGoing = true;
      while (keepGoing) {
        const isVertical = Math.random() < 0.5;
        const coordinate = selectRandomCoordinate(setupBoard.freeCoordinates);
        const validCoors = genValidCoordinates(
          shipClass,
          isVertical,
          coordinate
        );
        if (!validCoors) continue;

        setupBoard.addShip(validCoors);
        keepGoing = false;
      }
    };

    const randomlyPlaceShips = () => {
      ships.forEach((s) => randomlyPlaceShip(s));
    };

    return {
      playerId,
      playerName,
      hasWon,
      placeShip,
      isHuman,
      randomlyPlaceShips,
    };
  };
  return player;
};

export default playerFactory;
