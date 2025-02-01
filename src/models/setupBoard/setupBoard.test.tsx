import boardFactory from "./setupBoard";

describe("addShip to a 10x10 board", () => {
  let board: any;

  beforeEach(() => {
    const myBoardFactory = boardFactory();
    board = myBoardFactory(10);
  });

  describe("when it is called with length 3 the orientation vertical and the startCoordinate is a1", () => {
    beforeEach(() => {
      const length = 3;
      const isVertical = true;
      const startCoordinate = "a1";
      board.addShip({ length, isVertical, startCoordinate });
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

  describe("when it's called with length 4, orientation horizontal and a start coordinated of a1", () => {
    beforeEach(() => {
      const length = 4;
      const isVertical = false;
      const startCoordinate = "a1";
      board.addShip({ length, isVertical, startCoordinate });
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

  describe("when it's called with length 4, orientation horizontal and a start coordinated of h1", () => {
    beforeEach(() => {
      const length = 4;
      const isVertical = false;
      const startCoordinate = "h1";
      board.addShip({ length, isVertical, startCoordinate });
    });

    it("does not add a ship to the ships array", () => {
      expect(board.getShips()).toHaveLength(0);
    });
  });

  describe("when it's called with length 2, orientation vertical and a start coordinated of a10", () => {
    beforeEach(() => {
      const length = 2;
      const isVertical = true;
      const startCoordinate = "a10";
      board.addShip({ length, isVertical, startCoordinate });
    });

    it("does not add a ship to the ships array", () => {
      expect(board.getShips()).toHaveLength(0);
    });
  });

  describe("when adding multiple ships", () => {
    beforeEach(() => {
      const firstShip = {
        length: 3,
        isVertical: true,
        startCoordinate: "a1",
      };
      const secondShip = {
        length: 4,
        isVertical: true,
        startCoordinate: "f1",
      };
      board.addShip(firstShip);
      board.addShip(secondShip);
    });

    it("adds both ships to the ships array", () => {
      expect(board.getShips()).toHaveLength(2);
    });
  });

  describe("when adding twice the same ship", () => {
    beforeEach(() => {
      const firstShip = {
        length: 3,
        isVertical: true,
        startCoordinate: "a1",
      };
      board.addShip(firstShip);
      board.addShip(firstShip);
    });

    it("adds only adds it one time to the ships array", () => {
      expect(board.getShips()).toHaveLength(1);
    });
  });

  describe("when adding a ship directly next to another", () => {
    beforeEach(() => {
      const shipOne = {
        length: 3,
        isVertical: true,
        startCoordinate: "a1",
      };
      const shipTwo = {
        length: 3,
        isVertical: true,
        startCoordinate: "b1",
      };
      board.addShip(shipOne);
      board.addShip(shipTwo);
    });

    it("only adds the first ship", () => {
      expect(board.getShips()).toHaveLength(1);
    });
  });

  describe("when adding a ship that crosses another", () => {
    beforeEach(() => {
      const shipOne = {
        length: 4,
        isVertical: true,
        startCoordinate: "c1",
      };
      const shipTwo = {
        length: 4,
        isVertical: false,
        startCoordinate: "a2",
      };
      board.addShip(shipOne);
      board.addShip(shipTwo);
    });

    it("only adds the first ship", () => {
      expect(board.getShips()).toHaveLength(1);
    });
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
