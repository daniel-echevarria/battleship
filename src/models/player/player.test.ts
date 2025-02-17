import { PlayBoard, SetupBoard } from "@/types/boardTypes";
import { Player } from "@/types/playerTypes";
import playerFactory from "./player";
import setupBoard from "../setupBoard/setupBoard";
import playBoardFactory from "../playBoard/playBoard";
import * as getValidUserCoordinate from "@/utils/getValidUserCoordinate";
import shipClasses from "@/data/shipClasses";
import { ShipClass } from "@/types/shipTypes";

describe("Player", () => {
  let player: Player;
  let setupBoardOne: SetupBoard;
  let playBoardOne: PlayBoard;
  let myPlayerFactory: any;
  let myName = "Joe";

  beforeEach(() => {
    myPlayerFactory = playerFactory();
    const setupBoardFactory = setupBoard();
    myName = "Kevin";
    setupBoardOne = setupBoardFactory(10);
    const myPlayBoardFactory = playBoardFactory();
    playBoardOne = myPlayBoardFactory(setupBoardOne);
    player = myPlayerFactory({
      playBoard: playBoardOne,
      setupBoard: setupBoardOne,
      name: myName,
      shipClasses,
      isHuman: false,
    });
  });

  describe("randomlyPlaceShips", () => {
    it("randomly places all the player's ships", () => {
      player.randomlyPlaceShips();
      expect(setupBoardOne.getShips().length).toBe(shipClasses.length);
    });
  });

  describe("areAllShipsPlaced", () => {
    it("returns true if all ships are placed", () => {
      const shipClassOne = { isPlaced: true };
      const shipClassTwo = { isPlaced: true };
      const shipClasses = [shipClassOne, shipClassTwo];
      player = myPlayerFactory({
        playBoard: playBoardOne,
        setupBoard: setupBoardOne,
        name: myName,
        shipClasses,
        isHuman: false,
      });
      expect(player.areAllShipsPlaced()).toBe(true);
    });

    it("returns false if at least one ship is not placed", () => {
      const shipClassOne = { isPlaced: false };
      const shipClassTwo = { isPlaced: true };
      const shipClasses = [shipClassOne, shipClassTwo];
      player = myPlayerFactory({
        playBoard: playBoardOne,
        setupBoard: setupBoardOne,
        name: myName,
        shipClasses,
        isHuman: false,
      });
      expect(player.areAllShipsPlaced()).toBe(false);
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
      shipClass = { name: "drak", length: 3, isPlaced: false };
    });

    it("should place the ship if the coordinate is valid for that ship configuration", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue("a1");

      const mockCanShipGoThere = vi
        .spyOn(setupBoardOne, "canShipGoThere")
        .mockReturnValue(true);

      const mockAddShip = vi.spyOn(setupBoardOne, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(setupBoardOne.getShips()).toHaveLength(1);
    });

    it("should not place the ship if the coordinate is not valid", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue(undefined);

      const mockCanShipGoThere = vi
        .spyOn(setupBoardOne, "canShipGoThere")
        .mockReturnValue(true);

      const mockAddShip = vi.spyOn(setupBoardOne, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(setupBoardOne.getShips()).toHaveLength(0);
    });

    it("should not place the ship if the ship cannot go there", async () => {
      const mockGetValidUserCoordinate = vi
        .spyOn(getValidUserCoordinate, "default")
        .mockResolvedValue("a1");

      const mockCanShipGoThere = vi
        .spyOn(setupBoardOne, "canShipGoThere")
        .mockReturnValue(false);

      const mockAddShip = vi.spyOn(setupBoardOne, "addShip");

      await player.placeShip({
        shipClass,
        isVertical: true,
        inputProvider: vi.fn(),
      });

      expect(setupBoardOne.getShips()).toHaveLength(0);
    });
  });
});
