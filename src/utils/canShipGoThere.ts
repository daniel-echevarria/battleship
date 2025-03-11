import genShipCoordinates from "./coordinatesGeneration/genShipCoordinates";
import { CanShipGoThereArgs } from "@/types/boardTypes";

const areAllCoordinatesAvailable = (
  coordinates: string[],
  freeCoordinates: string[]
) => {
  return coordinates.every((c) => freeCoordinates.includes(c));
};

const canShipGoThere = ({
  length,
  isVertical,
  coordinate,
  freeCoordinates,
}: CanShipGoThereArgs) => {
  if (!coordinate) return false;

  const shipCoordinates = genShipCoordinates({
    length,
    isVertical,
    startCoordinate: coordinate,
  });
  const canGo = areAllCoordinatesAvailable(shipCoordinates, freeCoordinates);
  return canGo;
};

export default canShipGoThere;
