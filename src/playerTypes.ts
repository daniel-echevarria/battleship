import { SetupBoard, PlayBoard } from "./boardTypes";
import { ShipClass } from "./shipTypes";

type Player = {
  playerId: number;
  playerName: string;
  setupBoard: SetupBoard;
  isHuman: boolean;
  hasWon: () => boolean;
  randomlyPlaceShips: () => void;
  placeShip: ({ shipClass, isVertical, inputProvider }: PlaceShipArgs) => void;
};

type PlayerArgs = {
  setupBoard: SetupBoard;
  playBoard: PlayBoard;
  ships: ShipClass[];
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
