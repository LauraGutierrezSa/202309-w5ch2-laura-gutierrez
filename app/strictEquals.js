const strictEquals = (valueA, valueB) => {
  const isNaN = (value) => Object.is(value, NaN);

  if (isNaN(valueA) && isNaN(valueB)) {
    return false;
  }

  return Object.is(valueA, valueB);
};

export default strictEquals;
