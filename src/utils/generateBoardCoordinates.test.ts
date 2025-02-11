import generateCoordinates from "./generateBoardCoordinates";

describe("generateCoordinates", () => {
  describe("when passed a xLength of 2 and an yLength of 2", () => {
    it("returns an array of ['a1, 'b1', 'a2', 'b2']", () => {
      const xLength = 2;
      const yLength = 2;
      const result = ["a1", "b1", "a2", "b2"];
      expect(generateCoordinates(xLength, yLength).sort()).toEqual(
        result.sort()
      );
    });
  });

  describe("when passed an xLength of 4 and an yLength of 4", () => {
    it("returns an array of ['a1', 'b1', 'c1', 'd1', 'a2', 'b2', 'c2', 'd2', 'a3', 'b3', 'c3', 'd3', 'a4', 'b4', 'c4', 'd4']", () => {
      const xLength = 4;
      const yLength = 4;
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
      expect(generateCoordinates(xLength, yLength).sort()).toEqual(
        result.sort()
      );
    });
  });

  describe("when passed xLength of 10 and an yLength of 10", () => {
    it("returns a list that has 100 elements which include a1, f6 and j10", () => {
      const xLength = 10;
      const yLength = 10;
      const valuesToCheck = ["a1", "f6", "j10"];
      expect(generateCoordinates(xLength, yLength)).toHaveLength(100);
      valuesToCheck.forEach((value) => {
        expect(generateCoordinates(xLength, yLength)).toContain(value);
      });
    });
  });

  describe("when passed xLength of 3 and an yLength of 2", () => {
    it("returns a array like ", () => {
      const xLength = 3;
      const yLength = 2;
      const result = ["a1", "b1", "c1", "a2", "b2", "c2"];
      expect(generateCoordinates(xLength, yLength).sort()).toEqual(
        result.sort()
      );
    });
  });
});
