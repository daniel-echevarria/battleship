import generateCoordinates from "./generateCoordinates";

type getPossiblePositionsArgs = {
  shipLength: number;
  boardLength: number;
  vertical: boolean;
};

const getPossiblePositions = ({
  shipLength,
  boardLength,
  vertical,
}: getPossiblePositionsArgs) => {
  const maxPosition = boardLength - (shipLength - 1);
  const xLength = vertical ? boardLength : maxPosition;
  const yLength = vertical ? maxPosition : boardLength;
  console.log(xLength, yLength);
  return generateCoordinates(xLength, yLength);
};

export default getPossiblePositions;
