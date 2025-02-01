import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "./playBoard";

describe("playBoard of 10x10 with a ship placed on [a1, a2, a3] and another on [g4, h4, i4, j4]", () => {
  let myPlayBoardFactory: any;
  let mySetupBoardFactory: any;
  let playBoard: any;

  beforeEach(() => {
    mySetupBoardFactory = setupBoard();
    const mySetupBoard = mySetupBoardFactory(10);
    const myShipObj = {
      shipLength: 3,
      startCoordinate: "a1",
      isVertical: true,
    };
    const shipObjTwo = {
      shipLength: 4,
      startCoordinate: "g4",
      isVertical: false,
    };
    mySetupBoard.addShip(myShipObj);
    mySetupBoard.addShip(shipObjTwo);
    myPlayBoardFactory = playBoardFactory(mySetupBoard);
    playBoard = myPlayBoardFactory();
  });

  describe("receiveHit", () => {
    describe("when passed a coordinate where there is a boat", () => {
      beforeEach(() => {
        const coordinate = "a1";
        playBoard.receiveHit(coordinate);
      });

      it("adds the coordinate to the hits array", () => {
        expect(playBoard.getHits()).toContain("a1");
        expect(playBoard.getHits()).toHaveLength(1);
      });

      it("does not add the coordinate to the missed array", () => {
        expect(playBoard.getMissed()).toHaveLength(0);
      });
    });

    describe("when passed a coordinate where there is no boat", () => {
      beforeEach(() => {
        const coordinate = "b3";
        playBoard.receiveHit(coordinate);
      });

      it("adds the coordinate to the missed array", () => {
        expect(playBoard.getMissed()).toContain("b3");
        expect(playBoard.getMissed()).toHaveLength(1);
      });

      it("does not add the coordinate to hits array", () => {
        expect(playBoard.getHits()).not.toContain("b3");
        expect(playBoard.getHits()).toHaveLength(0);
      });
    });
  });

  describe("possibleAttacks", () => {
    let valuesToCheck: string[];
    beforeEach(() => {
      valuesToCheck = ["a1", "c4", "j10"];
    });
    describe("after board initialization", () => {
      it("returns a set of size 100 including a1 and c4 and j10", () => {
        expect(playBoard.getPossibleAttacks().size).toBe(100);
        valuesToCheck.forEach((value) => {
          expect(playBoard.getPossibleAttacks().has(value)).toBe(true);
        });
      });
    });

    describe("after a hit on a1", () => {
      it("returns a set of size 99 not including a1", () => {
        const hit = "a1";
        playBoard.receiveHit(hit);
        expect(playBoard.getPossibleAttacks().size).toBe(99);
        expect(playBoard.getPossibleAttacks().has(hit)).toBe(false);
      });
    });

    describe("after one hit on a1 and one miss on c4", () => {
      it("returns a set of size 98 not including a1 and c4", () => {
        playBoard.receiveHit("a1");
        playBoard.receiveHit("c4");
        expect(playBoard.getPossibleAttacks().size).toBe(98);
        expect(playBoard.getPossibleAttacks().has("a1")).toBe(false);
        expect(playBoard.getPossibleAttacks().has("c4")).toBe(false);
      });
    });

    describe("after 5 hits and 4 misses", () => {
      it("returns a set of size 91 not including the hits and misses", () => {
        const hits = ["a1"];
        playBoard.receiveHit("a1");
        playBoard.receiveHit("c4");
        expect(playBoard.getPossibleAttacks().size).toBe(98);
        expect(playBoard.getPossibleAttacks().has("a1")).toBe(false);
        expect(playBoard.getPossibleAttacks().has("c4")).toBe(false);
      });
    });
  });
});
