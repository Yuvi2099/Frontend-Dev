function applyOperation(numbers, operation) {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    result.push(operation(numbers[index]));
  }
  return result;
}

const baseNumbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(baseNumbers, function (number) {
  return number * 2;
});

const squaredNumbers = applyOperation(baseNumbers, function (number) {
  return number * number;
});

console.log("Doubled:", doubledNumbers);
console.log("Squared:", squaredNumbers);
