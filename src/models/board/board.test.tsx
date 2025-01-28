import boardFactory from "./board";

describe("when getBoard is called just after board initialization", () => {
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

      expect(board.getBoard()).toEqual([
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

      expect(board.getBoard()).toEqual([
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

      expect(board.getBoard()).toEqual([
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ]);
    });
  });
});
