function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.3; // 30% chance of failure
    setTimeout(() => {
      if (shouldFail) {
        reject("Failed to fetch bugs from API.");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugsList => {
    console.log("Fetched bugs:");
    console.table(bugsList); // console.table gives a neat, tabular view
  })
  .catch(error => {
    console.log("Error while fetching bugs:", error);
  });
