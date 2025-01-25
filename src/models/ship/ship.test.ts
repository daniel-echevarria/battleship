import { Ship } from "@/types";
import shipFactory from "./ship";

describe("receiveHit", () => {
  let shipOne: Ship;

  beforeEach(() => {
    const myShip = shipFactory();
    const coordinates = ["a1", "b1", "c1"];
    shipOne = myShip(coordinates);
  });

  it("Does not add the value if the value isn't present in the coordinates", () => {
    shipOne.receiveHit("a2");
    expect(shipOne.getHits().length).toBe(0);
  });

  it("Adds the value to the hits array if the value is present in the coordinates", () => {
    shipOne.receiveHit("a1");
    expect(shipOne.getHits()).toContain("a1");
  });

  it("Only adds the value present in the coordinates after multiple shots", () => {
    shipOne.receiveHit("a2"); //missed
    shipOne.receiveHit("b2"); //missed
    shipOne.receiveHit("b1"); //hit
    shipOne.receiveHit("d4"); //missed
    expect(shipOne.getHits().length).toBe(1);
    expect(shipOne.getHits()).toContain("b1");
  });
});
