// Global variable declared outside the function
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
  // Local variable declared inside the function
  let salary = 40000;

  // Logic to add bonus only if employee is permanent
  if (isPermanent) {
    salary += bonus;
  }

  // Print the total salary
  console.log(`Total Salary: ₹${salary}`);
}

// Testing function behavior with both permanent and temporary employees
console.log("Case 1: Permanent Employee");
calculateSalary(true); // Should add bonus

console.log("Case 2: Temporary Employee");
calculateSalary(false); // Should not add bonus

// Demonstrating that the global bonus remains unchanged
console.log(`Global Bonus Value: ₹${bonus}`); // It should still be 5000
