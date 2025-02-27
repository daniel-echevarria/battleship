const genBoardCoordinates = (xLength: number, yLength: number) => {
  let possibles: string[] = [];
  for (let i = 0; i < yLength; i++) {
    const num = (i + 1).toString();
    for (let j = 0; j < xLength; j++) {
      const letter = String.fromCharCode(j + 97);
      const coordinate = [letter, num].join("");
      possibles.push(coordinate);
    }
  }
  return possibles;
};

export default genBoardCoordinates;
