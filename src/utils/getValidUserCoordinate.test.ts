import { Mock } from "vitest";
import getValidUserCoordinate from "./getValidUserCoordinate";

describe("getValidUserCoordinate called with valid coordinates being a1 b1 c1 d1", () => {
  const validCoordinates = ["a1", "b1", "c1", "d1"];
  let inputProviderMock: Mock;

  describe("when the user inputs a coordinate part of the valid coordinates", () => {
    const validInputs = ["a1", "b1", "c1", "d1"];

    validInputs.forEach((input) => {
      it(`returns ${input} when users inputs ${input}`, async () => {
        inputProviderMock = vi.fn().mockResolvedValue(input);
        const params = { inputProvider: inputProviderMock, validCoordinates };
        const result = await getValidUserCoordinate(params);
        expect(result).toBe(input);
      });
    });
  });

  describe("when the user inputs a coordinate not part of the valid coordinates", () => {
    const invalidInputs = ["z9", "", 35, true, null, undefined];

    invalidInputs.forEach((invalidInput) => {
      it(`returns undefined when users inputs ${invalidInput}`, async () => {
        inputProviderMock = vi.fn().mockResolvedValue(invalidInput);
        const params = { inputProvider: inputProviderMock, validCoordinates };
        const result = await getValidUserCoordinate(params);
        expect(result).toBe(undefined);
      });
    });
  });
});
