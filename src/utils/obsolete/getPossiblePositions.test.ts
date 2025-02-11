import getPossiblePositions from "./getPossiblePositions";

describe("getPossiblePositions", () => {
  describe("when passed a ship of length 2, a 3x3 board and a vertical orientation", () => {
    const shipLength = 2;
    const boardLength = 3;
    const isVertical = true;
    const result = ["a1", "b1", "c1", "a2", "b2", "c2"];
    it("returns an array like ['a1', 'b1', 'c1', 'a2', 'b2' 'c2']", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
      ).toEqual(result.sort());
    });
  });

  describe("when passed a ship of length 1, a 2x2 board and a vertical orientation", () => {
    const shipLength = 1;
    const boardLength = 2;
    const isVertical = true;
    const result = ["a1", "b1", "a2", "b2"];
    it("returns an array like ['a1', 'b1', 'a2', 'a2']", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
      ).toEqual(result.sort());
    });
  });

  describe("when passed a ship of length 2, a 3x3 board and an horizontal orientation", () => {
    const shipLength = 2;
    const boardLength = 3;
    const isVertical = false;
    const result = ["a1", "b1", "a2", "b2", "a3", "b3"];
    it("returns an array like ['a1', 'b1', 'a2', 'b2', 'a3', 'b3']", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
      ).toEqual(result.sort());
    });
  });

  describe("when passed a ship of length 5, a 10x10 board and an horizontal orientation", () => {
    const shipLength = 5;
    const boardLength = 10;
    const isVertical = false;
    const shouldContain = ["a1", "a10", "f1", "f10", "a6", "f6"];
    const shouldNotContain = ["g1", "j1", "g10", "j10", "g5", "j5"];
    it("returns an array of 60 elements", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, isVertical })
      ).toHaveLength(60);
    });
    it("contains the elements a1 a10 f1 f10 a6 f6", () => {
      shouldContain.forEach((el) => {
        expect(
          getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
        ).toContain(el);
      });
    });

    it("does not contain the elements g1 j1 g10 j10 g5, j5", () => {
      shouldNotContain.forEach((el) => {
        expect(
          getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
        ).not.toContain(el);
      });
    });
  });

  describe("when passed a ship of length 3, a 10x10 board and a vertical orientation", () => {
    const shipLength = 3;
    const boardLength = 10;
    const isVertical = true;
    const shouldContain = ["a1", "a8", "e1", "e8", "j1", "j8"];
    const shouldNotContain = ["a9", "e10", "j9"];
    it("returns an array of 80 elements", () => {
      expect(
        getPossiblePositions({ shipLength, boardLength, isVertical })
      ).toHaveLength(80);
    });
    it("contains the elements a1 a8 e1 e8 j1 j8", () => {
      shouldContain.forEach((el) => {
        expect(
          getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
        ).toContain(el);
      });
    });

    it("does not contain the elements a9 e10 j9", () => {
      shouldNotContain.forEach((el) => {
        expect(
          getPossiblePositions({ shipLength, boardLength, isVertical }).sort()
        ).not.toContain(el);
      });
    });
  });
});
