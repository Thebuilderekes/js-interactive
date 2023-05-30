// Create the parent section
const parentsection = document.createElement("section");
// Set the parent section's ID
parentsection.id = "grid-container";
// Create an array of hotel objects

function createHotelCard() {
	const hotels = [hotelA, hotelB, hotelC, hotelD];
	const card = Object.assign(document.createElement("section"), {
		className: "card",
	});

	const images = [
		"/img/compressed/hotelroom1-800.jpg",
		"/img/compressed/hotelroom2-800.jpg",
		"/img/compressed/hotelroom3-800.jpg",
	];

	const thumbnails = document.createElement("div");
	const preview = document.createElement("figure");
	const image = Object.assign(document.createElement("img"), {
		className: "show",
	});
	image.src = images[0];

	thumbnails.classList.add("thumbnails");
	preview.append(image);

	// Add small images to the gallery
	images.forEach((imagePath) => {
		const img = new Image();
		img.src = imagePath;
		img.addEventListener("click", () => (image.src = imagePath));
		thumbnails.appendChild(img);
	});

	const bookBtn = document.createElement("button");
	const cancelBtn = document.createElement("button");

	//create button function
	const buttonContainer = Object.assign(document.createElement("div"), {
		className: "button-container",
	});
	buttonContainer.appendChild(bookBtn);
	buttonContainer.appendChild(cancelBtn);

	bookBtn.textContent = "Book Room";
	bookBtn.classList.add("bookBtn");
	bookBtn.onclick = () => hotels[i].makeReservation();
	cancelBtn.textContent = "Cancel Booking";
	cancelBtn.classList.add("cancelBtn");
	cancelBtn.onclick = () => hotels[i].cancelReservation();
	card.appendChild(thumbnails);
	card.appendChild(preview);
	card.appendChild(buttonContainer);
	parentsection.appendChild(card);
}

//Create 4 child sections with 2 buttons in each
for (let i = 0; i < 4; i++) {
	createHotelCard();
}

//the imagegallery into the card
//the buttons into the card
//the card hotel number of times
//the card into the parent section
