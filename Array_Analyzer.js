let scores = Array.from({ length: 8 }, function () {
  // Random integer between 30 and 100 (inclusive)
  return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
});

// Step 2: Highest and lowest score using spread operator
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Step 3: Average score using reduce()
let totalScore = scores.reduce(function (sum, score) {
  return sum + score;
}, 0);

let averageScore = totalScore / scores.length;

// Step 4: Number of students who passed (≥ 50) using filter()
let passedStudents = scores.filter(function (score) {
  return score >= 50;
}).length;

// Step 5: Full summary output
console.log("Student Scores:", scores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Number of Students Passed (>= 50):", passedStudents);
