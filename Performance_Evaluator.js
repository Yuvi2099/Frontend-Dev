function evaluatePerformance() {
  const marks = [
    parseFloat(document.getElementById('subject1').value) || 0,
    parseFloat(document.getElementById('subject2').value) || 0,
    parseFloat(document.getElementById('subject3').value) || 0,
    parseFloat(document.getElementById('subject4').value) || 0,
    parseFloat(document.getElementById('subject5').value) || 0
  ];

  // Validation: check if any subject is less than 35
  const isFailedInAnySubject = marks.some(mark => mark < 35);
  
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const percentage = (total / 500) * 100;

  let result;
  
  if (isFailedInAnySubject) {
    result = "Detained (Failed in one or more subjects)";
  } else if (percentage >= 85) {
    result = "Promoted with Distinction";
  } else if (percentage >= 50) {
    result = "Promoted";
  } else {
    result = "Detained";
  }

  // Display result
  document.getElementById('output').innerHTML = `
    Total Marks: ${total.toFixed(2)} <br>
    Average Marks: ${average.toFixed(2)} <br>
    Percentage: ${percentage.toFixed(2)}% <br>
    Result: <strong>${result}</strong>
  `;
}
