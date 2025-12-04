const products = [
{ id: 1, name: 'Shirt', category: 'Apparel', price: 799, stock: 10 },
{ id: 2, name: 'Jeans', category: 'Apparel', price: 1299, stock: 3 },
{ id: 3, name: 'Keyboard', category: 'Electronics', price: 1999, stock: 5 },
{ id: 4, name: 'Mouse', category: 'Electronics', price: 499, stock: 0 },
{ id: 5, name: 'Mug', category: 'Home', price: 199, stock: 20 }
];


function getLowStockProducts(threshold = 5) {
return products.filter(p => p.stock <= threshold);
}


function sortProductsByPrice(order = 'asc') {
return [...products].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}


function calculateTotalInventoryValue() {
return products.reduce((total, p) => total + p.price * p.stock, 0);
}


function groupByCategory() {
return products.reduce((acc, p) => {
if (!acc[p.category]) acc[p.category] = [];
acc[p.category].push(p);
return acc;
}, {});
}


console.log('\nQ7 — Low stock (<=5):', getLowStockProducts());
console.log('Q7 — Sorted by price (asc):', sortProductsByPrice('asc'));
console.log('Q7 — Total inventory value:', calculateTotalInventoryValue());
console.log('Q7 — Grouped by category:', groupByCategory());

