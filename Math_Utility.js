let x = 16.75;

// Step 1: Rounded value
let roundedValue = Math.round(x);

// Step 2: Square root
let squareRootValue = Math.sqrt(x);

// Step 3: x to the power 3
let powerValue = Math.pow(x, 3);

// Step 4: Random number between 10 and 50
// Math.random() -> [0, 1)
// * 41 -> [0, 41)
// floor -> [0, 40]
// + 10 -> [10, 50]
let randomValue = Math.floor(Math.random() * 41) + 10;

// Step 5: Template literal summary
let resultSummary = `
Math Utility Dashboard:
- Original value: ${x}
- Rounded value: ${roundedValue}
- Square root: ${squareRootValue}
- x^3: ${powerValue}
- Random number between 10 and 50: ${randomValue}
`;

// Display summary
console.log(resultSummary);
