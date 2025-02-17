import { GetValidUserCoordinateArgs } from "@/types/playerTypes";

const getValidUserCoordinate = async ({
  inputProvider,
  validCoordinates,
}: GetValidUserCoordinateArgs) => {
  const userInput = await inputProvider();
  const validCoordinate = validCoordinates.find((coo) => coo === userInput);
  return validCoordinate;
};

export default getValidUserCoordinate;
