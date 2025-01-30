const genNearbyCoordinates = (coordinates: string[]) => {
  const nearby: string[][] = [];
  coordinates.forEach((c) => {
    const square = genSquare(c);
    nearby.push(square);
  });

  const uniqueItems = [...new Set(nearby.flat())];
  return uniqueItems;
};

const genSquare = (coordinate: string) => {
  const letterCharCode: number = coordinate[0].charCodeAt(0);
  const num: number = Number(coordinate.slice(1));

  const squareCoordinates: string[] = [];

  for (let i = -1; i < 2; i++) {
    const letter = String.fromCharCode(letterCharCode + i);
    for (let j = -1; j < 2; j++) {
      const coordinate = [letter, num + j].join("");
      squareCoordinates.push(coordinate);
    }
  }

  return squareCoordinates;
};

export default genNearbyCoordinates;
