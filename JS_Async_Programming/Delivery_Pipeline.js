function getRandomDelayMs() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Taking order...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Failed at takeOrder");
      } else {
        console.log("Step 1: Order taken");
        resolve();
      }
    }, getRandomDelayMs());
  });
}

function prepareFood() {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Preparing food...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Failed at prepare");
      } else {
        console.log("Step 2: Food prepared");
        resolve();
      }
    }, getRandomDelayMs());
  });
}

function packOrder() {
  return new Promise((resolve, reject) => {
    console.log("Step 3: Packing food...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Failed at pack");
      } else {
        console.log("Step 3: Package ready");
        resolve();
      }
    }, getRandomDelayMs());
  });
}

function dispatchOrder() {
  return new Promise((resolve, reject) => {
    console.log("Step 4: Dispatching order...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Failed at dispatch");
      } else {
        console.log("Step 4: Out for delivery");
        resolve();
      }
    }, getRandomDelayMs());
  });
}

function deliverOrder() {
  return new Promise((resolve, reject) => {
    console.log("Step 5: Delivering order...");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Failed at deliver");
      } else {
        console.log("Delivery completed!");
        resolve();
      }
    }, getRandomDelayMs());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
   
    await takeOrder();   
    await prepareFood(); 
    await packOrder();   
    await dispatchOrder(); 
    await deliverOrder();  

    
    console.log("Pipeline finished successfully.");
  } catch (error) {
    
    console.log("Pipeline failed!", error);
  }
}
runPipeline();
