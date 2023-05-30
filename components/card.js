// Import necessary modules
import { thumbnails, preview } from "./imagegallery.js";
import { buttonContainer } from "./buttons.js";
import { hotels } from "./hotelList.js";

export const createCards = () => {
	for (let i = 0; i < hotels.length; i++) {
		// Create a card section element using Object.assign
		const card = Object.assign(document.createElement("section"), {
			className: "card",
		});
		card.appendChild(thumbnails);
		card.appendChild(preview);
		card.appendChild(buttonContainer);
		return card;
	}
};
