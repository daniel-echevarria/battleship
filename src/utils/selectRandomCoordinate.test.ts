import selectRandomCoordinate from "./selectRandomCoordinate";

describe("selectRandomCoordinate", () => {
  describe("when given an array of coordinates", () => {
    const coordinates = ["a1", "b1", "c1", "d1"];
    const result = selectRandomCoordinate(coordinates);
    it("randomly selects one", () => {
      expect(coordinates).toContain(result);
    });
  });
});
