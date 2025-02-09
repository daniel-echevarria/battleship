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
    let mockCoordinateProvider: any;
    let mockOrientationProvider: any;
    let player: any;
    let shipClass: any;

    describe("when placing a ship of length 3 vertically ", () => {
      beforeEach(() => {
        player = player1;
        shipClass = { name: "bla", length: 3 };
        mockOrientationProvider = vi.fn().mockReturnValue(true);
      });

      describe("when the user first inputs z9 and then a1 ", () => {
        beforeEach(() => {
          mockCoordinateProvider = vi
            .fn()
            .mockReturnValueOnce("z9")
            .mockReturnValueOnce("a1");

          game.requestShipPlacement({
            shipClass,
            player,
            coordinateProvider: mockCoordinateProvider,
            orientationProvider: mockOrientationProvider,
          });
        });

        it("calls the input provider twice", () => {
          expect(mockCoordinateProvider).toHaveBeenCalledTimes(2);
        });

        it("adds exactly one ship to the player setup board", () => {
          expect(player.setupBoard.getShips().length).toBe(1);
        });

        it("adds a ship with coordinates a1 a2 a3", () => {
          const ship = player.setupBoard.getShips()[0];
          expect(ship.getCoordinates()).toEqual(["a1", "a2", "a3"]);
        });
      });
    });

    describe("when placing a ship of length 4 horizontaly", () => {
      beforeEach(() => {
        player = player1;
        shipClass = { name: "bla", length: 4 };
        mockOrientationProvider = vi.fn().mockReturnValue(false);
      });

      describe("when the user inputs h1", () => {
        beforeEach(() => {
          mockCoordinateProvider = vi.fn().mockReturnValueOnce("h1");

          game.requestShipPlacement({
            shipClass,
            player,
            coordinateProvider: mockCoordinateProvider,
            orientationProvider: mockOrientationProvider,
          });
        });

        it("does not add a ship to the ships array", () => {
          expect(player.setupBoard.getShips()).toHaveLength(0);
        });
      });
    });

    describe("when placing a ship of length 2 vertically", () => {
      beforeEach(() => {
        player = player1;
        shipClass = { name: "bla", length: 2 };
        mockOrientationProvider = vi.fn().mockReturnValue(true);
      });

      describe("when the user inputs a10", () => {
        beforeEach(() => {
          mockCoordinateProvider = vi.fn().mockReturnValueOnce("a10");

          game.requestShipPlacement({
            shipClass,
            player,
            coordinateProvider: mockCoordinateProvider,
            orientationProvider: mockOrientationProvider,
          });
        });

        it("does not add a ship to the ships array", () => {
          expect(player.setupBoard.getShips()).toHaveLength(0);
        });
      });
    });

    describe("when placing two ship of length 3 vertically", () => {
      beforeEach(() => {
        player = player1;
        shipClass = { name: "bla", length: 3 };
        mockOrientationProvider = vi.fn().mockReturnValue(true);
      });

      describe("when the user inputs a1 and f6", () => {
        beforeEach(() => {
          mockCoordinateProvider = vi
            .fn()
            .mockReturnValueOnce("a1")
            .mockReturnValueOnce("f6");

          game.requestShipPlacement({
            shipClass,
            player,
            coordinateProvider: mockCoordinateProvider,
            orientationProvider: mockOrientationProvider,
          });

          game.requestShipPlacement({
            shipClass,
            player,
            coordinateProvider: mockCoordinateProvider,
            orientationProvider: mockOrientationProvider,
          });
        });

        it("adds both ships", () => {
          expect(player.setupBoard.getShips()).toHaveLength(2);
        });
      });
    });
  });
});
