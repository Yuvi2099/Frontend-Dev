"use strict";
(function(){
try {
// fixed version
var score = 50;
function announce() { console.log("Game started"); }
announce();
let status = "ready";
const startGame = () => { console.log(status); };
startGame();
console.log(score);
} catch (err) {
console.log('Error in hoisting lab:', err.message);
}
})();