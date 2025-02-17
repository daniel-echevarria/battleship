import { SetupBoard, PlayBoard } from "./boardTypes";
import { ShipClass } from "./types/shipTypes";

type Player = {
  playerId: number;
  playerName: string;
  isHuman: boolean;
  hasWon: () => boolean;
  randomlyPlaceShips: () => void;
  areAllShipsPlaced: () => boolean;
  placeShip: ({ shipClass, isVertical, inputProvider }: PlaceShipArgs) => void;
};

type PlayerArgs = {
  setupBoard: SetupBoard;
  playBoard: PlayBoard;
  shipClasses: ShipClass[];
  name: string;
  isHuman: boolean;
};

type GetValidUserCoordinateArgs = {
  inputProvider: InputProvider;
  validCoordinates: string[];
};

type PlaceShipArgs = {
  shipClass: ShipClass;
  isVertical: boolean;
  inputProvider: InputProvider;
};

type InputProvider = () => Promise<string>;

export { Player, PlayerArgs, GetValidUserCoordinateArgs, PlaceShipArgs };
