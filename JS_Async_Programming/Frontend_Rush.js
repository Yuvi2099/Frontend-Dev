function runStage(stageName, callback) {
  console.log(`Starting: ${stageName}`);
  setTimeout(() => {
    console.log(`Completed: ${stageName}`);
    callback();
  }, 1000);
}

function runPipelineWithCallbacks() {
  console.log("Pipeline with callbacks: START");

  runStage("design", () => {
    runStage("build", () => {
      runStage("test", () => {
        runStage("deploy", () => {
          runStage("celebrate", () => {
            console.log("Pipeline with callbacks: END");
          });
        });
      });
    });
  });
}

function runStagePromise(stageName) {
  return new Promise(resolve => {
    console.log(`Starting: ${stageName}`);
    setTimeout(() => {
      console.log(`Completed: ${stageName}`);
      resolve();
    }, 1000);
  });
}

async function runPipelineWithAsyncAwait() {
  console.log("Pipeline with async/await: START");
  await runStagePromise("design");
  await runStagePromise("build");
  await runStagePromise("test");
  await runStagePromise("deploy");
  await runStagePromise("celebrate");
  console.log("Pipeline with async/await: END");
}


runPipelineWithCallbacks();
setTimeout(() => {
  runPipelineWithAsyncAwait();
}, 7000); 
