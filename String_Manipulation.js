let rawProductName = " wireless headphones PRO ";

let trimmedName = rawProductName.trim();

let lowerCaseName = trimmedName.toLowerCase();

let words = lowerCaseName.split(" ");

let capitalizedWords = words.map(function (word) {
  if (word.length === 0) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
});

let cleanedTitle = capitalizedWords.join(" ").trim();

cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");


let titleLength = cleanedTitle.length;

// Final output
console.log("Cleaned Product Title:", cleanedTitle);
console.log("Title Length:", titleLength);
