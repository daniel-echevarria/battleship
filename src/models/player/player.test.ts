import { PlayBoard, Player, SetupBoard, ShipClass } from "@/types";
import playerFactory from "./player";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "../playBoard/playBoard";

describe("Player", () => {
  let player: Player;
  let setupBoardOne: SetupBoard;
  let playBoardOne: PlayBoard;

  beforeEach(() => {
    const myPlayerFactory = playerFactory();
    const setupBoardFactory = setupBoard();
    const myName = "Kevin";
    setupBoardOne = setupBoardFactory(10);
    const myPlayBoardFactory = playBoardFactory();
    playBoardOne = myPlayBoardFactory(setupBoardOne);
    player = myPlayerFactory({
      playBoard: playBoardOne,
      setupBoard: setupBoardOne,
      name: myName,
    });
  });

  describe("hasLost", () => {
    it("returns true if all ships are isDestroyed", () => {
      const areAllShipsDestroyedSpy = vi.spyOn(
        playBoardOne,
        "areAllShipsDestroyed"
      );
      areAllShipsDestroyedSpy.mockReturnValue(true);
      expect(player.hasWon()).toBe(true);
    });
  });

  describe("placeShip", () => {
    let shipClass: ShipClass;

    beforeEach(() => {
      shipClass = { name: "Drakkar", length: 4 };
    });

    describe("when placing a Drakkar shipClass (length 4) into an empty 10x10 board", () => {
      it("should call addShip with the correct arguments", () => {
        const coordinate = "a1";
        const isVertical = true;
        const addShipSpy = vi.spyOn(setupBoardOne, "addShip");
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
          expect(setupBoardOne.getShips()).toHaveLength(1);
        });

        it("adds a ship of length 4 to the player's board", () => {
          const playerShips = setupBoardOne.getShips();
          expect(playerShips[0].getCoordinates()).toHaveLength(4);
        });

        it("adds a ship which coordinates are a1 a2 a3 a4", () => {
          const ship = setupBoardOne.getShips()[0];
          const result = ["a1", "a2", "a3", "a4"];
          expect(ship.getCoordinates()).toEqual(result);
        });
      });
    });
  });
});
