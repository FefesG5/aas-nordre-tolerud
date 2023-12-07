export const isValidInput = (input: string) => {
  const regex = /^[a-zA-Z0-9 ,.!?()"'-]+$/;
  return regex.test(input);
};
