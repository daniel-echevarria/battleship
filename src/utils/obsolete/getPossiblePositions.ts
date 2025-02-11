import genBoardCoordinates from "./coordinatesGeneration/genBoardCoordinates";

type getPossiblePositionsArgs = {
  shipLength: number;
  boardLength: number;
  isVertical: boolean;
};

const getPossiblePositions = ({
  shipLength,
  boardLength,
  isVertical,
}: getPossiblePositionsArgs) => {
  const maxPosition = boardLength - (shipLength - 1);
  const xLength = isVertical ? boardLength : maxPosition;
  const yLength = isVertical ? maxPosition : boardLength;
  return genBoardCoordinates(xLength, yLength);
};

export default getPossiblePositions;
