import { SetupBoard } from "@/types";
import boardFactory from "./setupBoard";

describe("addShip to a 10x10 board", () => {
  let board: SetupBoard;

  beforeEach(() => {
    const myBoardFactory = boardFactory();
    board = myBoardFactory(10);
  });

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

  describe("when getBoardMatrix is called just after board initialization", () => {
    let board: any;
    let myBoardFactory: any;
    let boardSize: number;

    beforeEach(() => {
      myBoardFactory = boardFactory();
    });

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
