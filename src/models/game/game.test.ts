import { Game, Player, ShipClass } from "@/types";
import playerFactory from "../player/player";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "../playBoard/playBoard";
import gameFactory from "./game";
import shipClasses from "@/data/shipClasses";

describe("Game", () => {
  let game: Game;
  let player1: Player;
  let player2: Player;
  let myShipClasses: ShipClass[];

  beforeEach(() => {
    const mySetupBoardFactory = setupBoard();
    const myPlayBoardFactory = playBoardFactory();
    const myGameFactory = gameFactory();
    const setupBoardOne = mySetupBoardFactory(10);
    const setupBoardTwo = mySetupBoardFactory(10);
    const playBoardOne = myPlayBoardFactory(setupBoardTwo);
    const playBoardTwo = myPlayBoardFactory(setupBoardOne);
    const myPlayerFactory = playerFactory();
    player1 = myPlayerFactory({
      setupBoard: setupBoardOne,
      playBoard: playBoardOne,
      name: "Joe",
    });
    player2 = myPlayerFactory({
      setupBoard: setupBoardTwo,
      playBoard: playBoardTwo,
      name: "Kevin",
    });
    const players = [player1, player2];
    let myShipClasses = shipClasses;
    game = myGameFactory(players, myShipClasses);
  });

  describe("currentPlayer", () => {
    it("it returns the first player after initialization", () => {
      expect(game.currentPlayer).toBe(player1);
    });

    it("it does not return the second player after initialization", () => {
      expect(game.currentPlayer).not.toBe(player2);
    });
  });

  describe("requestShipPlacement", () => {
    describe("when the user inputs a valid coordinate", () => {
      it.only("adds a ship to the players setupBoard", () => {
        const player = player1;
        const shipClass = shipClasses[0];

        const mockInputProvider = vi
          .fn()
          .mockReturnValueOnce("z9")
          .mockReturnValueOnce("a1");

        game.requestShipPlacement({
          shipClass,
          player,
          inputProvider: mockInputProvider,
        });

        expect(mockInputProvider).toHaveBeenCalledTimes(2);
        expect(player.setupBoard.getShips().length).toBe(1);
      });
    });

    describe("when the coordinate is not part of the possibleCoordinates", () => {
      it("returns undefined");
    });
  });

  // describe("requestShipPlacement", () => {
  //   it("request players to place all their ships", () => {
  //     const numShipsToPlace = shipClasses.length;
  //     const numPlayers = game.players.length;
  //     const requestShipPlacementMock = vi.spyOn(game, "requestShipsPlacement");
  //     game.gameLoop();
  //     expect(requestShipPlacementMock).toHaveBeenCalledTimes(
  //       numShipsToPlace * numPlayers
  //     );
  //   });
  // });
});
