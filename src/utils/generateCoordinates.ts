const generateCoordinates = (boardSize: number) => {
  let possibles = [];
  for (let i = 0; i < boardSize; i++) {
    const letter = String.fromCharCode(i + 97);
    for (let j = 0; j < boardSize; j++) {
      const num = (j + 1).toString();
      const coordinate = [letter, num].join("");
      possibles.push(coordinate);
    }
  }
  return possibles;
};

export default generateCoordinates;
