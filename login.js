const userNameInput = document.getElementById("userNameInput");
const greetBtn = document.getElementById("greetBtn");
const greetingMessageElement = document.getElementById("greetingMessage");

greetBtn.addEventListener("click", function () {
  // Read the user name from the input field
  const userName = userNameInput.value.trim();

  if (userName === "") {
    greetingMessageElement.textContent = "Please enter your name first.";
    return;
  }

  // Get the current hour (0–23) from the system clock
  const currentHour = new Date().getHours();

  // Decide which greeting to show based on the current time
  let greetingText = "";

  if (currentHour < 12) {
    greetingText = `Good Morning, ${userName}!`;
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingText = `Good Afternoon, ${userName}!`;
  } else {
    greetingText = `Good Evening, ${userName}!`;
  }

  // Display the greeting message on the page
  greetingMessageElement.textContent = greetingText;

  // Also log the greeting to the console (for testing in browser/Node.js)
  console.log(greetingText);
});
