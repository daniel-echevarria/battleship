import { PlaceShipArgs, PlayerArgs } from "@/types/playerTypes";
import genShipCoordinates from "@/utils/coordinatesGeneration/genShipCoordinates";
import getValidUserCoordinate from "@/utils/getValidUserCoordinate";
import selectRandomCoordinate from "@/utils/selectRandomCoordinate";
import { ShipClass } from "@/types/shipTypes";

const playerFactory = () => {
  let id = 0;
  const player = ({ setupBoard, playBoard, name, isHuman }: PlayerArgs) => {
    const playerId = ++id;
    const playerName = name;
    const hasWon = () => {
      return playBoard.areAllShipsDestroyed();
    };

    const genValidCoordinates = (
      length: number,
      isVertical: boolean,
      coordinate: string
    ) => {
      if (!setupBoard.canShipGoThere({ length, isVertical, coordinate }))
        return;

      const shipCoordinates = genShipCoordinates({
        length,
        isVertical,
        startCoordinate: coordinate,
      });

      if (shipCoordinates) return shipCoordinates;
    };

    const placeShip = async ({
      inputProvider,
      shipClass,
      isVertical,
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
      toggleShipClassPlacement(shipClass);
    };

    const randomlyPlaceShip = (shipClass: ShipClass) => {
      if (shipClass.isPlaced) return;
      let keepGoing = true;
      let i = 0;
      while (keepGoing) {
        const isVertical = Math.random() < 0.5;
        const coordinate = selectRandomCoordinate(setupBoard.freeCoordinates);
        const validCoors = genValidCoordinates(
          shipClass.length,
          isVertical,
          coordinate
        );
        if (i++ > 50) break;
        if (!validCoors) continue;

        setupBoard.addShip(validCoors);
        toggleShipClassPlacement(shipClass);
        keepGoing = false;
      }
    };

    const randomlyPlaceShips = (ships) => {
      ships.forEach((s) => randomlyPlaceShip(s));
    };

    const toggleShipClassPlacement = (shipClass: ShipClass) => {
      shipClass.isPlaced = shipClass.isPlaced ? false : true;
    };

    return {
      playerId,
      playerName,
      hasWon,
      placeShip,
      isHuman,
      randomlyPlaceShips,
      setupBoard,
    };
  };
  return player;
};

export default playerFactory;
