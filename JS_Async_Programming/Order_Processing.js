function submitOrder() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.5; 
    setTimeout(() => {
      if (shouldFail) {
        reject("Order submission failed due to network issue.");
      } else {
        resolve("Order submitted successfully.");
      }
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attemptNumber = 1; attemptNumber <= maxAttempts; attemptNumber++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attemptNumber}: Success - ${result}`);
      return; // stop after success
    } catch (error) {
      console.log(`Attempt ${attemptNumber}: Failed - ${error}`);
    }
  }

  throw new Error("Order could not be processed");
}

async function main() {
  try {
    await processOrder(3);
    console.log("Order processing completed.");
  } catch (error) {
    console.log("Final Error:", error.message);
  }
}

main();
