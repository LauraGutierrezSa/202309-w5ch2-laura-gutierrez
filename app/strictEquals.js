const strictEquals = (valueA, valueB) => {
  return Object.is(valueA, valueB);
};

console.log(strictEquals(1, 1));
export default strictEquals;
