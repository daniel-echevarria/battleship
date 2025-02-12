function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const selectRandomCoordinate = (coordinates: string[]) => {
  if (coordinates.length === 0) {
    throw "Array cannot be empty";
  }
  const randomIndex = getRandomInt(0, coordinates.length);
  return coordinates[randomIndex];
};

export default selectRandomCoordinate;
