import { Player, requestShipPlacementArgs, ShipClass } from "@/types";
import generateShipCoordinates from "@/utils/generateShipCoordinates";

const gameFactory = () => {
  const game = (players: Player[], shipClasses: ShipClass[]) => {
    let currentPlayer = players[0];

    const isGameOver = () => {
      return false;
    };

    const requestShipPlacement = ({
      player,
      shipClass,
      coordinateProvider,
      orientationProvider,
    }: requestShipPlacementArgs) => {
      let validInput;

      while (!validInput) {
        const coordinate = coordinateProvider();
        if (!player.setupBoard.freeCoordinates.includes(coordinate)) continue;

        const isVertical = orientationProvider();
        const shipCoordinates = generateShipCoordinates({
          startCoordinate: coordinate,
          length: shipClass.length,
          isVertical: isVertical,
        });

        if (!player.setupBoard.areAllCoordinatesAvailable(shipCoordinates))
          return;

        const placedShip = player.setupBoard.addShip(shipCoordinates);
        validInput = placedShip;
      }
    };

    const placeShips = (
      player: Player,
      shipClasses: ShipClass[],
      coordinateProvider: () => string
    ) => {
      shipClasses.forEach((s) => {
        requestShipPlacement({ player, shipClass: s, coordinateProvider });
      });
    };

    const gameLoop = () => {};

    return {
      currentPlayer,
      isGameOver,
      players,
      requestShipPlacement,
      gameLoop,
      placeShips,
    };
  };

  return game;
};

export default gameFactory;
