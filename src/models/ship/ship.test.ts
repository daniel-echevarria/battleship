import { Ship } from "@/types/types";
import shipFactory from "./ship";

describe("ship", () => {
  let shipOne: Ship;
  const coordinates = ["a1", "b1", "c1"];

  beforeEach(() => {
    const myShipFactory = shipFactory(); // Create the ship factory
    shipOne = myShipFactory(coordinates); // Create a ship
  });

  describe("receiveHit", () => {
    describe("when the value is present in the coordinates", () => {
      it("Adds the value to the hits array", () => {
        shipOne.receiveHit("a1");
        expect(shipOne.getHits()).toContain("a1");
      });

      it("returns the value", () => {
        expect(shipOne.receiveHit("a1")).toBe("a1");
      });
    });

    describe("when the value is not present in the coordinates", () => {
      it("Does not add the value to the hits array", () => {
        shipOne.receiveHit("a2");
        expect(shipOne.getHits().length).toBe(0);
      });

      it("returns false", () => {
        expect(shipOne.receiveHit("a2")).toBe(false);
      });
    });

    describe("when some value are present and some are not", () => {
      it("adds the present values to the hits array and not the others", () => {
        shipOne.receiveHit("a2"); //missed
        shipOne.receiveHit("b2"); //missed
        shipOne.receiveHit("b1"); //hit
        shipOne.receiveHit("d4"); //missed
        expect(shipOne.getHits().length).toBe(1);
        expect(shipOne.getHits()).toContain("b1");
      });
    });
  });

  describe("isDestroyed", () => {
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
});
