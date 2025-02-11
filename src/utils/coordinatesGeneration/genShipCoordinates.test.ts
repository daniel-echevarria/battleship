import generateShipCoordinates from "./genShipCoordinates";

describe("generateShipCoordinates", () => {
  describe("when ship length is 2, orientation vertical  and startCoordinates is a1", () => {
    it("returns an array with a1 a2", () => {
      const length = 2;
      const startCoordinate = "a1";
      const isVertical = true;
      const result = ["a1", "a2"];
      expect(
        generateShipCoordinates({
          length,
          isVertical,
          startCoordinate,
        })
      ).toEqual(result);
    });
  });

  describe("when ship length is 2, orientation horizontal and startCoordinates is a1", () => {
    it("returns an array with a1 a2", () => {
      const length = 2;
      const startCoordinate = "a1";
      const isVertical = false;
      const result = ["a1", "b1"];
      expect(
        generateShipCoordinates({
          length,
          isVertical,
          startCoordinate,
        })
      ).toEqual(result);
    });
  });

  describe("when ship length is 3, orientation vertical and startCoordinates is c3", () => {
    it("returns an array with c3 c4 c5", () => {
      const length = 3;
      const startCoordinate = "c3";
      const isVertical = true;
      const result = ["c3", "c4", "c5"];
      expect(
        generateShipCoordinates({
          length,
          isVertical,
          startCoordinate,
        })
      ).toEqual(result);
    });
  });

  describe("when ship length is 5, orientation isVertical and startCoordinates is f6", () => {
    it("returns an array with f6 f7 f8 f9 f10", () => {
      const length = 5;
      const startCoordinate = "f6";
      const isVertical = true;
      const result = ["f6", "f7", "f8", "f9", "f10"];
      expect(
        generateShipCoordinates({
          length,
          isVertical,
          startCoordinate,
        })
      ).toEqual(result);
    });
  });
});
