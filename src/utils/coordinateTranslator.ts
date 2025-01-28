const translateCoordinate = (coordinate: string) => {
  const letter = coordinate[0];
  const number = coordinate.slice(1);
  const letterIndex = letter.charCodeAt(0) - 97;
  const numIndex = Number(number) - 1;
  return { x: letterIndex, y: numIndex };
};

export default translateCoordinate;
