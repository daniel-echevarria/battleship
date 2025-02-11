import { PlayBoard, SetupBoard } from "@/boardTypes";
import { Player } from "@/playerTypes";
import { ShipClass } from "@/types";
import playerFactory from "./player";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "../playBoard/playBoard";
import * as getValidUserCoordinate from "@/utils/getValidUserCoordinate";
import shipClasses from "@/data/shipClasses";

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
      ships: shipClasses,
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
      shipClass = { name: "drak", length: 3 };
    });

    it("should place the ship if the coordinate is valid for that ship configuration", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue("a1");

      const mockCanShipGoThere = vi
        .spyOn(player.setupBoard, "canShipGoThere")
        .mockReturnValue(true);

      const mockAddShip = vi.spyOn(player.setupBoard, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(player.setupBoard.getShips()).toHaveLength(1);
    });

    it("should not place the ship if the coordinate is not valid", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue(undefined);

      const mockCanShipGoThere = vi
        .spyOn(player.setupBoard, "canShipGoThere")
        .mockReturnValue(true);

      const mockAddShip = vi.spyOn(player.setupBoard, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(player.setupBoard.getShips()).toHaveLength(0);
    });

    it("should not place the ship if the ship cannot go there", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue("a1");

      const mockCanShipGoThere = vi
        .spyOn(player.setupBoard, "canShipGoThere")
        .mockReturnValue(false);

      const mockAddShip = vi.spyOn(player.setupBoard, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(player.setupBoard.getShips()).toHaveLength(0);
    });
  });
});
