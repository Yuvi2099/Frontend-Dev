function planActivity() {
  const temperature = parseFloat(document.getElementById("temperature").value) || 0;
  const isRaining = document.getElementById("isRaining").value === "true";
  const windSpeed = parseFloat(document.getElementById("windSpeed").value) || 0;

  let suggestion = "";

  if (isRaining) {
    suggestion = "Stay indoors with hot coffee.";
  } else if (temperature > 35) {
    suggestion = "Go swimming.";
  } else if (temperature < 15 && windSpeed > 20) {
    suggestion = "Too cold and windy — stay home.";
  } else {
    suggestion = "Perfect day for a walk.";
  }

  document.getElementById("output").textContent = `Suggestion: ${suggestion}`;
}
