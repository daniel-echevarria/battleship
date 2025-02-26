import { describe, it, expect } from "vitest";
import calculateGrabOffset from "./calculateGrabOffset";

describe.only("calculateGrabOffset", () => {
  it("should return the correct cell index when mouse is within the first cell", () => {
    const cellSize = 50;
    const relativeMouseCoordinate = 25;
    const shipLength = 4;
    const result = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipLength
    );
    expect(result).toBe(0);
  });

  it("should return the correct cell index when mouse is within the second cell", () => {
    const cellSize = 50;
    const relativeMouseCoordinate = 75;
    const shipLength = 4;
    const result = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipLength
    );
    expect(result).toBe(1);
  });

  it("should return the correct cell index when mouse is within the third cell", () => {
    const cellSize = 50;
    const relativeMouseCoordinate = 125;
    const shipLength = 4;
    const result = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipLength
    );
    expect(result).toBe(2);
  });

  it("should return the correct cell index when mouse is within the fourth cell", () => {
    const cellSize = 50;
    const relativeMouseCoordinate = 175;
    const shipLength = 4;
    const result = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipLength
    );
    expect(result).toBe(3);
  });

  it("should return -1 when mouse is outside any cell", () => {
    const cellSize = 50;
    const relativeMouseCoordinate = 225;
    const shipLength = 4;
    const result = calculateGrabOffset(
      cellSize,
      relativeMouseCoordinate,
      shipLength
    );
    expect(result).toBe(-1);
  });
});
