const pow = (base: number, exponent: number) => {
  if (exponent === 0) return 1;
  if (exponent <= 0) return 0;
  var result = base;
  for (var e = 1; e < exponent; e++) {
    result *= base;
  }
  return result;
};

export { pow };
