export function calculateStartShip(
  coordinate: string,
  offSet: number,
  isVertical: boolean
): string {
  const column = coordinate[0];
  const row = parseInt(coordinate.slice(1));

  if (isVertical) {
    return `${column}${row - offSet}`;
  } else {
    return `${String.fromCharCode(column.charCodeAt(0) - offSet)}${row}`;
  }
}
