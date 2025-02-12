import selectRandomCoordinate from "./selectRandomCoordinate";

describe("selectRandomCoordinate", () => {
  let coordinates: string[];

  coordinates = ["a1", "b1", "c1", "d1"];
  const result = selectRandomCoordinate(coordinates);
  it("returns a value from the given array", () => {
    expect(coordinates).toContain(result);
  });

  it("gracefully handles empty arrays", () => {
    coordinates = [];
    expect(() => selectRandomCoordinate(coordinates)).toThrowError(
      "Array cannot be empty"
    );
  });
});
