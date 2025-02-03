import { ShipClass } from "@/types";
import playerFactory from "./player";
import setupBoard from "../setupBoard/setupBoard";

describe("placeShip", () => {
  let player: any;
  let shipClass: ShipClass;

  describe("when placing a Drakkar (length 4) into an empty 10x10 board", () => {
    beforeEach(() => {
      const myPlayerFactory = playerFactory();
      const setupBoardFactory = setupBoard();
      const boardOne = setupBoardFactory(10);
      player = myPlayerFactory(boardOne);
      shipClass = { name: "Drakkar", length: 4 };
    });

    describe("when player inputs a valid coordinate", () => {
      beforeEach(() => {
        const coordinate = "a1";
        const isVertical = true;
        player.placeShip({ shipClass, coordinate, isVertical });
      });

      it("adds a ship to the player's board", () => {
        expect(player.getBoard().getShips()).toHaveLength(1);
      });

      it("adds a ship of length 4 to the player's board", () => {
        const playerShips = player.getBoard().getShips();
        expect(playerShips[0].getCoordinates()).toHaveLength(4);
      });
    });
  });
});
