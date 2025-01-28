import getPossiblePositions from "./getPossiblePositions";

describe("getPossiblePositions", () => {
  describe("when passed a ship of length 2, a 3x3 board and a vertical orientation", () => {
    const shipLength = 2;
    const boardLength = 3;
    const vertical = true;
    const result = ["a1", "b1", "c1", "a2", "b2", "c2"];
    it("returns an array like ['a1', 'b1', 'c1', 'a2', 'b2' 'c2']", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, vertical }).sort()
      ).toEqual(result.sort());
    });
  });

  describe("when passed a ship of length 1, a 2x2 board and a vertical orientation", () => {
    const shipLength = 1;
    const boardLength = 2;
    const vertical = true;
    const result = ["a1", "b1", "a2", "b2"];
    it("returns an array like ['a1', 'b1', 'a2', 'a2']", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, vertical }).sort()
      ).toEqual(result.sort());
    });
  });
});
