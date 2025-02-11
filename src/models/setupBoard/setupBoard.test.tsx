import { SetupBoard } from "@/boardTypes";
import setupBoardFactory from "./setupBoard";

describe("setupBoard", () => {
  let board: SetupBoard;
  let myBoardFactory: any;

  describe("when working on a 10x10 board", () => {
    beforeEach(() => {
      myBoardFactory = setupBoardFactory();
      board = myBoardFactory(10);
    });

    describe("canShipGoThere", () => {
      const testCases = [
        { shipLength: 4, isVertical: true, coordinate: "a1", expected: true },
        { shipLength: 4, isVertical: true, coordinate: "a7", expected: true },
        { shipLength: 4, isVertical: false, coordinate: "a10", expected: true },
        { shipLength: 4, isVertical: true, coordinate: "a8", expected: false },
        { shipLength: 4, isVertical: false, coordinate: "h1", expected: false },
        { shipLength: 2, isVertical: true, coordinate: "b10", expected: false },
        { shipLength: 2, isVertical: true, coordinate: "j9", expected: true },
        { shipLength: 2, isVertical: false, coordinate: "10", expected: false },
      ];

      testCases.forEach(({ shipLength, isVertical, coordinate, expected }) => {
        it(`returns ${expected} when placing a ${shipLength}-length ship ${
          isVertical ? "vertically" : "horizontally"
        } on ${coordinate}`, () => {
          const shipClass = { name: "Drakkar", length: shipLength };
          expect(
            board.canShipGoThere({ shipClass, isVertical, coordinate })
          ).toBe(expected);
        });
      });
    });

    describe("addShip", () => {
      describe("when it is called a1 a2 a3", () => {
        beforeEach(() => {
          const coordinates = ["a1", "a2", "a3"];
          board.addShip(coordinates);
        });

        it("adds a ship to the ships array", () => {
          expect(board.getShips()).toHaveLength(1);
        });

        it("adds a ship with the coordinates a1 a2 a3", () => {
          const result = ["a1", "a2", "a3"];
          expect(board.getShips()[0].getCoordinates().sort()).toEqual(
            result.sort()
          );
        });
      });

      describe("when it's called with a1 b1 c1 d1", () => {
        beforeEach(() => {
          const coordinates = ["a1", "b1", "c1", "d1"];
          board.addShip(coordinates);
        });

        it("adds a ship to the ships array", () => {
          expect(board.getShips()).toHaveLength(1);
        });

        it("adds a ship with the coordinates a1 b1 c1 d1", () => {
          const result = ["a1", "b1", "c1", "d1"];
          expect(board.getShips()[0].getCoordinates().sort()).toEqual(
            result.sort()
          );
        });
      });
    });
  });

  describe("when getBoardMatrix is called just after board initialization", () => {
    let board: any;
    let boardSize: number;

    describe("when board size is 5", () => {
      it("returns a matrix of 5 x 5 with empty string", () => {
        boardSize = 5;
        board = myBoardFactory(boardSize);

        expect(board.getBoardMatrix()).toEqual([
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ]);
      });
    });

    describe("when board size is 7", () => {
      it("returns a matrix of 7 x 7 with empty string", () => {
        boardSize = 7;
        board = myBoardFactory(boardSize);

        expect(board.getBoardMatrix()).toEqual([
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
        ]);
      });
    });

    describe("when board size is 4", () => {
      it("returns a matrix of 4 x 4 with empty string", () => {
        boardSize = 4;
        board = myBoardFactory(boardSize);

        expect(board.getBoardMatrix()).toEqual([
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
        ]);
      });
    });
  });
});
