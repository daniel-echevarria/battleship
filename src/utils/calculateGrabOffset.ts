const calculateGrabOffset = (
  cellSize: number,
  relativeMouseCoordinate: number,
  shipLength: number
): number => {
  const cellIndex = Math.floor(relativeMouseCoordinate / cellSize);
  if (
    relativeMouseCoordinate < 0 ||
    relativeMouseCoordinate >= cellSize * shipLength
  ) {
    return -1;
  }
  return cellIndex;
};

export default calculateGrabOffset;
