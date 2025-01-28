import translateCoordinate from "./coordinateTranslator";

describe("translateCoordinate", () => {
  describe("when coordinate is a1", () => {
    it("returns an object like {x: 0, y: 0}", () => {
      const coordinate = "a1";
      expect(translateCoordinate(coordinate)).toEqual({ x: 0, y: 0 });
    });
  });

  describe("when coordinate is a2", () => {
    it("returns an object like {x: 0, y: 1}", () => {
      const coordinate = "a2";
      expect(translateCoordinate(coordinate)).toEqual({ x: 0, y: 1 });
    });
  });

  describe("when coordinate is b3", () => {
    it("returns an object like {x: 1, y: 2} ");
    const coordinate = "b3";
    expect(translateCoordinate(coordinate)).toEqual({ x: 1, y: 2 });
  });

  describe("when coordinate is g5", () => {
    it("returns an object like {x: 6, y: 4} ");
    const coordinate = "g5";
    expect(translateCoordinate(coordinate)).toEqual({ x: 6, y: 4 });
  });

  describe("when coordinate is j10", () => {
    it("returns an object like {x: 9, y: 9} ");
    const coordinate = "j10";
    expect(translateCoordinate(coordinate)).toEqual({ x: 9, y: 9 });
  });
});
