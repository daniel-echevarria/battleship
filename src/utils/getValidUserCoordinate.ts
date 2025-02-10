import { GetValidUserCoordinateParams } from "@/types";

const getValidUserCoordinate = async ({
  inputProvider,
  validCoordinates,
}: GetValidUserCoordinateParams) => {
  const userInput = await inputProvider();
  const validCoordinate = validCoordinates.find((coo) => coo === userInput);
  return validCoordinate;
};

export default getValidUserCoordinate;
