import { ShipClass } from "@/types";
import playerFactory from "./player";
import setupBoard from "../setupBoard/setupBoard";

describe("Player", () => {
  let player: any;
  beforeEach(() => {
    const myPlayerFactory = playerFactory();
    const setupBoardFactory = setupBoard();
    const boardOne = setupBoardFactory(10);
    player = myPlayerFactory(boardOne);
  });
});

describe("placeShip", () => {
  let player: any;
  let shipClass: ShipClass;
  let boardOne: any;

  describe("when placing a Drakkar shipClass (length 4) into an empty 10x10 board", () => {
    beforeEach(() => {
      const myPlayerFactory = playerFactory();
      const setupBoardFactory = setupBoard();
      boardOne = setupBoardFactory(10);
      player = myPlayerFactory(boardOne);
      shipClass = { name: "Drakkar", length: 4 };
    });

    it("should call addShip with the correct arguments", () => {
      const coordinate = "a1";
      const isVertical = true;
      const shipClass = { name: "Drakkar", length: 4 };
      const addShipSpy = vi.spyOn(boardOne, "addShip");
      player.placeShip({ shipClass, coordinate, isVertical });
      expect(addShipSpy).toHaveBeenCalledWith({
        length: shipClass.length,
        isVertical,
        startCoordinate: coordinate,
      });
    });

    describe("when called placed on a1 vertically", () => {
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

      it("adds a ship which coordinates are a1 a2 a3 a4", () => {
        const ship = player.getBoard().getShips()[0];
        const result = ["a1", "a2", "a3", "a4"];
        expect(ship.getCoordinates()).toEqual(result);
      });
    });
  });
});
