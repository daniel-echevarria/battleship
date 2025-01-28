import generateCoordinates from "./generateCoordinates";

describe("generateCoordinates", () => {
  describe("when passed a board size of 2", () => {
    it("returns an array of ['a1, 'b1', 'a2', 'b2']", () => {
      const boardSize = 2;
      const result = ["a1", "b1", "a2", "b2"];
      expect(generateCoordinates(boardSize).sort()).toEqual(result.sort());
    });
  });

  describe("when passed a board size of 4", () => {
    it("returns an array of ['a1', 'b1', 'c1', 'd1', 'a2', 'b2', 'c2', 'd2', 'a3', 'b3', 'c3', 'd3', 'a4', 'b4', 'c4', 'd4']", () => {
      const boardSize = 4;
      const result = [
        "a1",
        "b1",
        "c1",
        "d1",
        "a2",
        "b2",
        "c2",
        "d2",
        "a3",
        "b3",
        "c3",
        "d3",
        "a4",
        "b4",
        "c4",
        "d4",
      ];
      expect(generateCoordinates(boardSize).sort()).toEqual(result.sort());
    });
  });

  describe("when passed a board size of 10", () => {
    it("returns a list that has 100 elements which include a1, f6 and j10", () => {
      const boardSize = 10;
      const valuesToCheck = ["a1", "f6", "j10"];
      expect(generateCoordinates(boardSize)).toHaveLength(100);
      valuesToCheck.forEach((value) => {
        expect(generateCoordinates(boardSize)).toContain(value);
      });
    });
  });
});
