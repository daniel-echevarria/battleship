import { Game } from "@/types";
import gameFactory from "./game";
import playerFactory from "../player/player";
import setupBoardFactory from "../setupBoard/setupBoard";
import playBoardFactory from "../playBoard/playBoard";
import shipClasses from "@/data/shipClasses";

describe("game", () => {
  let game: Game;

  beforeEach(() => {
    game = setupGame();
  });

  describe("requestShipsPlacement", () => {
    it("places all ships for both players", async () => {
      await game.requestShipsPlacement();

      expect(game.players.every((p) => p.areAllShipsPlaced())).toBe(true);
    });
  });
});

const setupGame = () => {
  const boardSize = 10;

  // create a strategic board for each player
  const createSetupBoard = setupBoardFactory();
  const setupBoardOne = createSetupBoard(boardSize);
  const setupBoardTwo = createSetupBoard(boardSize);

  // create a play board for each player using the opponents strategic board
  const createPlayBoard = playBoardFactory();
  const playBoardOne = createPlayBoard(setupBoardTwo);
  const playBoardTwo = createPlayBoard(setupBoardOne);

  // create the 2 players with their strategic and play board
  const createPlayer = playerFactory();
  const player1 = createPlayer({
    name: "Joe",
    setupBoard: setupBoardOne,
    playBoard: playBoardOne,
    shipClasses,
    isHuman: false,
  });
  const player2 = createPlayer({
    name: "Blake",
    setupBoard: setupBoardTwo,
    playBoard: playBoardTwo,
    shipClasses,
    isHuman: false,
  });

  // create the game with the 2 players and the shipsClasses
  const game = gameFactory({
    players: [player1, player2],
    shipClasses: shipClasses,
  });

  return game;
};
