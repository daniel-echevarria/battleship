import genNearbyCoordinates from "./genNearbyCoordinates";

describe("genNearbyCoordinates", () => {
  describe("when passed an array of c2 c3", () => {
    it("returns an array with b1 b2 b3 b4 c1 c2 c3 c4 d1 d2 d3 d4", () => {
      const coordinates = ["c2", "c3"];
      const result = [
        "b1",
        "b2",
        "b3",
        "b4",
        "c1",
        "c2",
        "c3",
        "c4",
        "d1",
        "d2",
        "d3",
        "d4",
      ];
      expect(genNearbyCoordinates(coordinates).sort()).toEqual(result.sort());
    });
  });

  describe("when passed an array of c2 ", () => {
    it("returns an array with b1 b2 b3 c1 c2 c3 d1 d2 d3", () => {
      const coordinates = ["c2"];
      const result = ["b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3"];
      expect(genNearbyCoordinates(coordinates).sort()).toEqual(result.sort());
    });
  });
});
