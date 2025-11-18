let numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}
let analysisResults = [];

numbers.forEach(function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    analysisResults.push("FizzBuzz");
  } else if (num % 2 === 0) {
    analysisResults.push("Even");
  } else {
    analysisResults.push("Odd");
  }
});
console.log("Numbers:", numbers);
console.log("Analysis Results:", analysisResults);
