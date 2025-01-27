import boardFactory from "./board";

describe("getBoard", () => {
  let board: any;

  it("returns a matrix of empty strings with outer and inner arrays equal to the board size", () => {
    const myBoardFactory = boardFactory();
    const boardSize = 5;
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
