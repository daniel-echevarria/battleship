import { before } from "node:test";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "./playBoard";

describe("playBoard", () => {
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
    mySetupBoard.addShip(myShipObj);
    myPlayBoardFactory = playBoardFactory(mySetupBoard);
  });

  describe("receiveHit", () => {
    describe("when passed a coordinate where there is a boat", () => {
      beforeEach(() => {
        const coordinate = "a1";
        playBoard = myPlayBoardFactory();
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
        playBoard = myPlayBoardFactory();
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
});
