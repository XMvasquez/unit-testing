const factorial = (value: number) => {
  if (value === 0) return 1;
  if (value < 0 || value > 16) return 0;
  var result = value;
  for (var i = 1; i < value; i++) {
    result *= i;
  }
  return result;
};

export { factorial };
