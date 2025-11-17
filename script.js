function calculateExpenses() {
  const food = parseFloat(document.getElementById('food').value) || 0;
  const travel = parseFloat(document.getElementById('travel').value) || 0;
  const rent = parseFloat(document.getElementById('rent').value) || 0;
  const bills = parseFloat(document.getElementById('bills').value) || 0;
  const leisure = parseFloat(document.getElementById('leisure').value) || 0;

  const expenses = [food, travel, rent, bills, leisure];

  const total = expenses.reduce((sum, expense) => sum + expense, 0);
  const average = total / expenses.length;

  // Adding 10% tax
  let finalAmount = total;
  finalAmount += finalAmount * 0.10;

  // Updating UI
  document.getElementById('total').textContent = `Total Expenses: ₹${total.toFixed(2)}`;
  document.getElementById('average').textContent = `Average Expense: ₹${average.toFixed(2)}`;
  document.getElementById('final').textContent = `Final Amount (with 10% Tax): ₹${finalAmount.toFixed(2)}`;
}
