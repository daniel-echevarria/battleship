import { describe, it, expect } from "vitest";
import { capitalize } from "./practice";
import exp from "constants";

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("foo")).toBe("Foo");
    expect(capitalize("bar")).toBe("Bar");
  });

  it("returns an error if an empty string is passed", () => {
    expect(() => capitalize("")).toThrowError("string can't be empty");
  });
});
