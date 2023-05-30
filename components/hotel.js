let numberBooked = 0;
let roomWord = "room";
const indicator = Object.assign(document.createElement("p"), {
	className: "indicator",
});

class Hotel {
	constructor(name, rooms, booked, address) {
		this.name = name;
		this.rooms = rooms;
		this.booked = booked;
		this.address = address;
	}

	alertRoom(message) {
		if (numberBooked > 0) {
			roomWord = "rooms";
		} else if (numberBooked < 1) {
			roomWord = "room";
		}
		return alert(message);
	}

	displayIndicator() {
		return (indicator.textContent = `you have booked a room in ${this.name} hotel`);
	}

	makeReservation() {
		numberBooked++;
		let message = `you have booked ${numberBooked} ${roomWord}`;
		this.displayIndicator();
		this.alertRoom(message);
		if (this.rooms > 0) {
			this.booked++;
			this.rooms--;
			console.log("booked:", this.booked);
			console.log("roomsLeft:", this.rooms);
			console.log(this.name);
			return this.rooms - this.booked;
		} else {
			return alert("We do not have any more rooms available");
		}
	}

	cancelReservation() {
		if (this.booked <= this.rooms) {
			this.booked--;
			this.rooms++;
			alert("Cancelling reservation...");

			let message = `you have cancelled your resevation you now have ${this.rooms} rooms available`;
			this.alertRoom(message);
			console.log("booking cancelled:", this.booked);
			console.log("rooms increase:", this.rooms);
		}
	}
}

export class DummyHotelA extends Hotel {
	constructor(name, rooms, booked, address) {
		super(name, rooms, booked, address);
		this.name = name;
		this.address = address;
	}
	// Add additional methods specific to DummyHotelA if needed
	// ...
}

// import { DummyHotelA } from "./hotel.js";

const hotelA = new DummyHotelA("monte crystal", 3, 0, "123 str bayelsa");
const hotelB = new DummyHotelA("ebitari", 20, 0, "345 str bayelsa");
const hotelC = new DummyHotelA("jasmine", 25, 0, "567 str bayelsa");
const hotelD = new DummyHotelA("teps", 20, 0, "678 str bayelsa");

// Create an array of hotel objects
const hotels = [hotelA, hotelB, hotelC, hotelD];

//create parentsection to hold all the hotel cards
const parentsection = Object.assign(document.createElement("section"), {
	id: "grid-container",
});

//create indicator to show message for booking

function createHotelCard() {
	const hotels = [hotelA, hotelB, hotelC, hotelD];
	//create hotel cards with book and cancel buttons for each hotel
	hotels.forEach((hotel) => {
		const card = Object.assign(document.createElement("article"), {
			className: "card",
		});

		//create gallery with preview and thumbnails section

		const images = [
			"/img/compressed/hotelroom1-800.jpg",
			"/img/compressed/hotelroom2-800.jpg",
			"/img/compressed/hotelroom3-800.jpg",
		];

		const preview = document.createElement("figure");
		const thumbnails = document.createElement("div");
		const image = Object.assign(document.createElement("img"), {
			className: "show",
		});
		image.src = images[0];

		thumbnails.classList.add("thumbnails");
		preview.append(image);

		// Add small thumbnail images to the gallery
		images.forEach((imagePath) => {
			const img = new Image();
			img.src = imagePath;
			img.addEventListener("click", () => (image.src = imagePath));
			thumbnails.appendChild(img);
		});

		//create button container
		const buttonContainer = Object.assign(document.createElement("div"), {
			className: "button-container",
		});

		//create buttons
		const bookBtn = Object.assign(document.createElement("button"), {
			className: "bookbtn",
		});
		bookBtn.textContent = "Book Room";
		bookBtn.addEventListener("click", function () {
			return hotel.makeReservation();
		});

		const cancelBtn = Object.assign(document.createElement("button"), {
			className: "cancelbtn",
		});
		cancelBtn.textContent = "Cancel Booking";
		cancelBtn.addEventListener("click", function () {
			return hotel.cancelReservation();
		});

		buttonContainer.appendChild(bookBtn);
		buttonContainer.appendChild(cancelBtn);
		card.appendChild(thumbnails);
		card.appendChild(preview);
		card.appendChild(buttonContainer);
		card.appendChild(indicator);
		parentsection.appendChild(card);
	});

	// populate button container with buttons

	//add fuctionality to buttons
	// for (let i = 0; i < hotels.length; i++) {
	// 	// bookBtn.onclick = () => hotels[i].makeReservation();
	// 	cancelBtn.onclick = () => hotels[i].cancelReservation();
	// }

	document.body.appendChild(parentsection);
}

//Create 4 child sections with 2 buttons in each
// for (let i = 0; i < hotels.length; i++) {
createHotelCard();
//}

console.log("working");

//make a for loop using hotels to create the buttons to match each hotel card
//each button on click to log the hotel name
