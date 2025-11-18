const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];
function evaluatePerformance(score) {
  let result;

  if (score >= 90) {
    result = "Excellent";
  } else if (score >= 75 && score <= 89) {
    result = "Good";
  } else if (score >= 60 && score <= 74) {
    result = "Average";
  } else {
    result = "Needs Improvement";
  }

  return result;
}

// Loop through departments and print evaluations
departments.forEach(function (department) {
  let departmentName = department[0];
  let score = department[1];
  let performance = evaluatePerformance(score);

  console.log(
    `Department: ${departmentName}, Score: ${score}, Performance: ${performance}`
  );
});
