const hotelDetails = document.querySelector("#hotelDetails");
const bookBtn = document.querySelector("#bookBtn");
let numberBooked = 0;
let roomWord = "room";

class Hotel {
	constructor(name, rooms, booked, address) {
		this.name = name;
		this.rooms = rooms;
		this.booked = booked;
		this.address = address;
	}

	bookroom() {
		return this.rooms - this.booked;
	}

	checkAvailability() {
		if (this.rooms === 0) {
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

function alertRoom(message) {
	message = `you have booked ${numberBooked} ${roomWord}`;
	if (numberBooked > 0) {
		roomWord = "rooms";
	} else if (numberBooked < 1) {
		roomWord = "room";
	}
	return alert(message);
}

bookBtn.addEventListener("click", () => {
	hotelA.bookroom();
	hotelA.booked++;
	hotelA.rooms--;
	numberBooked++;
	console.log("booked:", hotelA.booked);
	console.log("roomsLeft:", hotelA.rooms);
	hotelDetails.textContent = `${hotelA.name} has ${hotelA.rooms} rooms available`;
	alertRoom();
});
