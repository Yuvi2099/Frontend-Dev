const menu = {
burger: 120,
pizza: 350,
fries: 80,
cola: 40
};


function calculateBill(orderItems) {
// map to prices (may throw if item not found)
const prices = orderItems.map(item => {
if (!(item in menu)) throw new Error(`Invalid item ordered: ${item}`);
return menu[item];
});


// reduce to total
const total = prices.reduce((a, b) => a + b, 0);
return total;
}


try {
console.log('\nQ3 — Bill for ["pizza","cola"]:', calculateBill(['pizza','cola']));
console.log('Q3 — Bill for ["pizza","icecream"] (should throw):');
console.log(calculateBill(['pizza','icecream']));
} catch (err) {
console.error('Q3 — Error calculating bill:', err.message);
}

