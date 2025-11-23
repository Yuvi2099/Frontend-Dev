Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

const sampleNumbers = [1, 2, 3];
const mappedNumbers = sampleNumbers.myMap(function (number) {
  return number * 2;
});

console.log(mappedNumbers);
