const genBoardCoordinates = (xLength: number, yLength: number) => {
  let possibles: string[] = [];
  for (let i = 0; i < xLength; i++) {
    const letter = String.fromCharCode(i + 97);
    for (let j = 0; j < yLength; j++) {
      const num = (j + 1).toString();
      const coordinate = [letter, num].join("");
      possibles.push(coordinate);
    }
  }
  return possibles;
};

export default genBoardCoordinates;
