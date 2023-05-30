// import { card } from "./hotelCards.js";
// import { card } from "./card.js";
import { createCards } from "./card.js";
// Create the parent section
const parentsection = document.createElement("section");
// Set the parent section's ID
parentsection.id = "grid-container";
parentsection.appendChild(createCards());

console.log(parentsection);
// Add the parent section to the document body

function displayHotels() {
	document.body.appendChild(parentsection);
}

displayHotels();

// for (let i = 0; i < hotels.length; i++) {
// 	displayHotels();
// }
