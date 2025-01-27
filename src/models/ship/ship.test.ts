import { Ship } from "@/types";
import shipFactory from "./ship";

describe("receiveHit", () => {
  let shipOne: Ship;
  const coordinates = ["a1", "b1", "c1"];

  beforeEach(() => {
    const myShip = shipFactory();
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

describe("isDestroyed", () => {
  let shipOne: Ship;
  const coordinates = ["a1", "b1", "c1"];

  beforeEach(() => {
    const myShip = shipFactory();
    shipOne = myShip(coordinates);
  });

  it("Returns false when ship is first initialize", () => {
    expect(shipOne.isDestroyed()).toBe(false);
  });

  it("Returns true when each coordinates was hit", () => {
    coordinates.forEach((c) => shipOne.receiveHit(c));
    expect(shipOne.isDestroyed()).toBe(true);
  });

  it("Returns false when the number of hit coordinates is smaller than the boats length", () => {
    shipOne.receiveHit("a1");
    expect(shipOne.isDestroyed()).toBe(false);
  });

  it("Returns true after multiple missed hits as long as each coordinate was hit", () => {
    shipOne.receiveHit("b2"); //missed
    shipOne.receiveHit("a1"); //hit
    shipOne.receiveHit("d7"); //missed
    shipOne.receiveHit("b1"); //hit
    shipOne.receiveHit("c1"); //hit
    shipOne.receiveHit("b3"); //missed
    expect(shipOne.isDestroyed()).toBe(true);
  });

  it("Returns false after multiple correct and missed hits as long as not each coordinate was hit", () => {
    shipOne.receiveHit("b2"); //missed
    shipOne.receiveHit("a1"); //hit
    shipOne.receiveHit("d7"); //missed
    shipOne.receiveHit("b1"); //hit
    shipOne.receiveHit("c2"); //missed
    shipOne.receiveHit("b3"); //missed
    expect(shipOne.isDestroyed()).toBe(false);
  });
});
