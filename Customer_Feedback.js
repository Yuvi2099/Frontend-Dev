let feedback =
  "Great product! Fast delivery and amazing sound quality!";

let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

// Step 2: Check for negative words "bad" or "poor" (case-insensitive)
let feedbackLower = feedback.toLowerCase();
let hasBad = feedbackLower.includes("bad");
let hasPoor = feedbackLower.includes("poor");

// Step 3: Determine feedback sentiment
if (!hasBad && !hasPoor) {
  console.log("Feedback:", feedback);
  console.log("Word Count:", wordCount);
  console.log("Result: Positive Feedback");
} else {
  console.log("Feedback:", feedback);
  console.log("Word Count:", wordCount);
  console.log("Result: Needs Improvement");
}
