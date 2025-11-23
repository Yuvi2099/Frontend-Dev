function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) {
        reject("Profile failed to load");
      } else {
        resolve("Profile Loaded");
      }
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) {
        reject("Posts failed to load");
      } else {
        resolve("Posts Loaded");
      }
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) {
        reject("Messages failed to load");
      } else {
        resolve("Messages Loaded");
      }
    }, 1000);
  });
}

async function runDashboardLoad() {
  const startTime = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  const endTime = Date.now();
  const totalTimeMs = endTime - startTime;

  results.forEach((result, index) => {
    const moduleName = index === 0 ? "Profile" : index === 1 ? "Posts" : "Messages";

    if (result.status === "fulfilled") {
      console.log(`${moduleName} succeeded:`, result.value);
    } else {
      console.log(`${moduleName} failed:`, result.reason);
    }
  });

  console.log(`Total time taken: ${totalTimeMs} ms`);
}

runDashboardLoad();
