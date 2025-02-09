import { PlayBoard, SetupBoard } from "@/types";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "./playBoard";

describe("playBoard of 10x10 with a ship placed on [a1, a2, a3] and another on [g4, h4, i4, j4]", () => {
  let playBoard: PlayBoard;
  let mockSetupBoard: SetupBoard;

  beforeEach(() => {
    const mySetupBoardFactory = setupBoard();
    mockSetupBoard = mySetupBoardFactory(10);
    const shipOne = ["a1", "a2", "a3"];
    const shipTwo = ["g4", "h4", "i4", "j4"];
    mockSetupBoard.addShip(shipOne);
    mockSetupBoard.addShip(shipTwo);
    const myPlayBoardFactory = playBoardFactory();
    playBoard = myPlayBoardFactory(mockSetupBoard);
  });

  describe("areAllShipsDestroyed", () => {
    it("returns true when all ships are destroyed", () => {
      const ships = mockSetupBoard.getShips();
      ships.forEach((ship: any) => {
        vi.spyOn(ship, "isDestroyed").mockReturnValue(true);
      });
      expect(playBoard.areAllShipsDestroyed()).toBe(true);
    });

    it("returns false when at least one ship is not destroyed", () => {
      const ships = mockSetupBoard.getShips();
      ships.forEach((ship: any, index: number) => {
        vi.spyOn(ship, "isDestroyed").mockReturnValue(index === 0);
      });
      expect(playBoard.areAllShipsDestroyed()).toBe(false);
    });
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
        const hits = ["a1", "a2", "a3", "g4", "h4"];
        const missed = ["b2", "b3", "b4", "b5"];
        hits.forEach((h) => playBoard.receiveHit(h));
        missed.forEach((m) => playBoard.receiveHit(m));
        expect(playBoard.getPossibleAttacks().size).toBe(91);
        hits.forEach((h) => {
          expect(playBoard.getPossibleAttacks().has(h)).toBe(false);
        });
        missed.forEach((m) => {
          expect(playBoard.getPossibleAttacks().has(m)).toBe(false);
        });
      });
    });
  });
});
