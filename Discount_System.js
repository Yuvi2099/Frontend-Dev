function calculateDiscount() {
  const total = parseFloat(document.getElementById("total").value) || 0;
  let discount = 0;

  if (total >= 10000) {
    discount = 25;
  } else if (total >= 5000) {
    discount = 15;
  } else if (total >= 2000) {
    discount = 5;
  }

  const discountAmount = (total * discount) / 100;
  const finalPrice = total - discountAmount;

  // Rounding the final price
  const roundedPrice = Math.round(finalPrice);
  const roundedDiscount = Math.round(discountAmount);

  document.getElementById("output").innerHTML = `
    Original Total: ₹${total}<br>
    Discount: ${discount}% (₹${roundedDiscount})<br>
    Final Price: ₹${roundedPrice}
  `;
}
