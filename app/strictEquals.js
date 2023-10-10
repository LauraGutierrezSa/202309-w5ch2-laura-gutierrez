const strictEquals = (valueA, valueB) => {
  const isValueANaN = Object.is(valueA, NaN);
  const isValueBNaN = Object.is(valueB, NaN);

  if (isValueANaN && isValueBNaN) {
    return false;
  }

  return Object.is(valueA, valueB);
};

export default strictEquals;
