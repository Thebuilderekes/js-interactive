// localStorage.setItem("this.rooms", 30);
// const roomsAvailable = localStorage.getItem("rooms")
let roomWord = "room";
let numberBooked = 0;

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

	makeReservation() {
		numberBooked++;
		let message = `you have booked ${numberBooked} ${roomWord}`;
		this.alertRoom(message);
		if (this.rooms > 0) {
			this.booked++;
			this.rooms--;
			console.log("booked:", this.booked);
			console.log("roomsLeft:", this.rooms);
			hotelDetails.textContent = `${this.name} has ${this.rooms} rooms available`;
			return this.rooms - this.booked;
		} else {
			return alert("We do not have any more rooms available");
		}
	}

	cancelReservation() {
		if (this.booked <= this.rooms) {
			this.booked--;
			this.rooms++;
			console.log("booking cancelled:", this.booked);
			console.log("rooms increase:", this.rooms);
			hotelDetails.textContent = `${this.name} has ${this.rooms} rooms available`;
			alert("Cancelling reservation");
		}
	}
}

class DummyHotelA extends Hotel {
	constructor(name, rooms, booked, address) {
		super(name, rooms, booked, address);
		this.name = name;
		this.address = address;
	}
	// Add additional methods specific to DummyHotelA if needed
	// ...
}

const hotelA = new DummyHotelA("monte crystal", 30, 10, "123 str bayelsa");
const hotelB = new DummyHotelA("ebitari", 20, 5, "345 str bayelsa");
const hotelC = new DummyHotelA("jasmine", 25, 14, "567 str bayelsa");
const hotelD = new DummyHotelA("teps", 20, 16, "678 str bayelsa");

// Create the parent section
const parentsection = document.createElement("section");
// Set the parent section's ID
parentsection.id = "grid-container";
// Create an array of hotel objects
const hotels = [hotelA, hotelB, hotelC, hotelD];

function createHotelCard() {
	const row = document.createElement("section");

	const images = [
		"/img/compressed/hotelroom1.jpg",
		"/img/compressed/hotelroom2.jpg",
		"/img/compressed/hotelroom3.jpg",
		"/img/compressed/hotelroom4.jpg",
		"/img/compressed/hotelroom5.jpg",
	];

	const thumbnails = document.createElement("div");
	const preview = document.createElement("figure");
	const image = document.createElement("img");
	image.classList.add("show");
	preview.append(image);

	thumbnails.classList.add("thumbnails");

	// Add small images to the gallery
	images.forEach((imagePath) => {
		const img = new Image();
		img.src = imagePath;
		img.addEventListener("click", () => (image.src = imagePath));
		thumbnails.appendChild(img);
	});

	const bookBtn = document.createElement("button");
	const cancelBtn = document.createElement("button");
	bookBtn.textContent = "Book Room";
	bookBtn.classList.add("bookBtn");
	bookBtn.onclick = () => hotels[i].makeReservation();
	cancelBtn.textContent = "Cancel Booking";
	cancelBtn.classList.add("cancelBtn");
	cancelBtn.onclick = () => hotels[i].cancelReservation();
	row.appendChild(preview);
	row.appendChild(thumbnails);
	row.appendChild(bookBtn);
	row.appendChild(cancelBtn);
	parentsection.appendChild(row);
}

//Create 4 child sections with 2 buttons in each
for (let i = 0; i < 4; i++) {
	createHotelCard();
}

// Add the parent section to the document body
document.body.appendChild(parentsection);

const hotelDetails = document.querySelector(".hotelDetails");

// In this example, we first define an array of image paths. We also set up the HTML structure for our gallery with a div for the thumbnails and a div for the preview image. In the CSS, we style the layout of the gallery and set the initial display of the preview image to none.

// In the JavaScript, we first select the thumbnails and preview elements from the HTML. Then, we use a forEach loop to iterate over each image path in the  images  array. For each image path, we create a new  Image  object and set its  src  property to the corresponding image path. We also add an event listener to the image that will update the  src  property of the preview image to the corresponding image path when the user clicks on the thumbnail. Finally, we append the small image to the thumbnails div.

// When the user clicks on a small image in the gallery, the  click  event listener will update the  src  property of the preview image with the corresponding larger image, which is hidden by default. This will display the larger version of the image to the user.
