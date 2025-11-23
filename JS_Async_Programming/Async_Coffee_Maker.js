function getRandomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Boiling water...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2; // 20% chance of failure
      if (shouldFail) {
        reject("Kettle malfunctioned while boiling water.");
      } else {
        resolve("Water boiled.");
      }
    }, getRandomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Brewing coffee...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Coffee machine error during brewing.");
      } else {
        resolve("Coffee brewed.");
      }
    }, getRandomDelay());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    console.log("Step 3: Pouring into cup...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Spilled the coffee while pouring.");
      } else {
        resolve("Coffee poured into cup.");
      }
    }, getRandomDelay());
  });
}

// Using Promise chaining to simulate the end-to-end process
boilWater()
  .then(result => {
    console.log(result);
    return brewCoffee();
  })
  .then(result => {
    console.log(result);
    return pourIntoCup();
  })
  .then(result => {
    console.log(result);
    console.log("Coffee ready for the team!");
  })
  .catch(error => {
    console.log("Coffee process failed:", error);
  });
