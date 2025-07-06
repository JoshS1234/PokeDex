export const arrayToString = (arrayToConvert: Array<string>): string => {
  return arrayToConvert.join(", ");
};

export const firstLetterCap = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};
