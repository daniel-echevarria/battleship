export const capitalize = (string: string) => {
  if (string.length < 1) {
    throw new Error("string can't be empty");
  }
  const firstLetter = string[0];
  const rest = string.slice(1);
  const capitalizedFirstLetter = firstLetter.toUpperCase();
  return capitalizedFirstLetter + rest;
};
