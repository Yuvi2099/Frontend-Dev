let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to evaluate security status
function evaluateSecurityStatus() {

  let isSecure =
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  if (isSecure) {
    console.log("System Status: Secure");
  } else {
    console.log("System Status: Unsafe");
  }
}

// Test 1: All secure
console.log("Test 1: All conditions satisfied");
evaluateSecurityStatus();

// Test 2: Change some values to test different outcomes
console.log("Test 2: Window open");
isWindowClosed = false;
evaluateSecurityStatus();

// Test 3: Owner not inside
console.log("Test 3: Owner not inside");
isWindowClosed = true;
isOwnerInside = false;
evaluateSecurityStatus();

// Test 4: Alarm off
console.log("Test 4: Alarm off");
isOwnerInside = true;
isAlarmOn = false;
evaluateSecurityStatus();
