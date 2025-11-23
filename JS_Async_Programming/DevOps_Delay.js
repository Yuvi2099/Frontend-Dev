function serverARequest() {
  return new Promise((resolve, reject) => {
    console.log("Server A: Deployment started.");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Server A: Deployment failed.");
      } else {
        resolve("Server A: Deployment successful.");
      }
    }, 2000);
  });
}

function serverBRequest() {
  return new Promise((resolve, reject) => {
    console.log("Server B: Deployment started.");
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject("Server B: Deployment failed.");
      } else {
        resolve("Server B: Deployment successful.");
      }
    }, 3000);
  });
}

const deploymentPromises = [serverARequest(), serverBRequest()];

Promise.all(deploymentPromises)
  .then(results => {
    console.log("Deployment completed for all servers.");
    console.log(results);
  })
  .catch(error => {
    console.log("Deployment error in one of the servers:", error);
  });

Promise.race(deploymentPromises)
  .then(fastestResult => {
    console.log("Fastest response:", fastestResult);
  })
  .catch(error => {
    console.log("Fastest response resulted in error:", error);
  });
