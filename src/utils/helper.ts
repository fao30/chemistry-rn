export const getFixedNumber = (n: number) => {
  if (Number.isInteger(n)) {
    return n.toFixed(0);
  } else {
    return n.toFixed(2);
  }
};
