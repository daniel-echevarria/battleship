type GenShipCoordinatesArgs = {
  length: number;
  startCoordinate: string;
  isVertical: boolean;
};

const genShipCoordinates = ({
  length,
  startCoordinate,
  isVertical,
}: GenShipCoordinatesArgs) => {
  const letter = startCoordinate[0];
  const num = Number(startCoordinate.slice(1));

  const generateVertical = () => {
    let coordinates = [];
    for (let i = 0; i < length; i++) {
      const formedCoordinate = [letter, num + i].join("");
      coordinates.push(formedCoordinate);
    }
    return coordinates;
  };

  const generateHorizontal = () => {
    let coordinates = [];
    for (let i = 0; i < length; i++) {
      const newLetterCharCode = letter.charCodeAt(0) + i;
      const newLetter = String.fromCharCode(newLetterCharCode);
      const formedCoordinate = [newLetter, num].join("");
      coordinates.push(formedCoordinate);
    }
    return coordinates;
  };

  return isVertical ? generateVertical() : generateHorizontal();
};

export default genShipCoordinates;
