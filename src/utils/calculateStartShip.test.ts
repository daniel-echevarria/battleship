import { describe, it, expect } from "vitest";
import { calculateStartShip } from "./calculateStartShip";

describe("calculateStartShip", () => {
  it("should return the start coordinate of the ship when isVertical is false", () => {
    expect(calculateStartShip("b1", 1, false)).toBe("a1");
    expect(calculateStartShip("c3", 2, false)).toBe("a3");
    expect(calculateStartShip("d5", 3, false)).toBe("a5");
  });

  it("should return the start coordinate of the ship when isVertical is true", () => {
    expect(calculateStartShip("a4", 2, true)).toBe("a2");
    expect(calculateStartShip("b6", 3, true)).toBe("b3");
    expect(calculateStartShip("c8", 4, true)).toBe("c4");
  });
});
