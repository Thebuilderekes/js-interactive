const hotelDetails = document.querySelector(".hotelDetails");
const bookBtn = document.querySelector(".bookBtn");
const cancelReservation = document.querySelector(".cancelBtn");
localStorage.setItem("this.rooms", 30);
const roomsAvailable = localStorage.getItem("rooms");
let roomLimit = this.rooms;
let roomWord = "room";

class Hotel {
	constructor(name, rooms, booked, address) {
		this.name = name;
		this.rooms = rooms;
		this.booked = booked;
		this.address = address;
	}

	alertRoom(message) {
		message = `you have booked ${numberBooked} ${roomWord}`;
		if (numberBooked > 0) {
			roomWord = "rooms";
		} else if (numberBooked < 1) {
			roomWord = "room";
		}
		return alert(message);
	}

	makeReservation() {
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
		alert("Cancelling reservation");

		if (this.booked <= this.rooms) {
			this.booked--;
			this.rooms++;
			console.log("booking cancelled:", this.booked);
			console.log("rooms increase:", this.rooms);
			hotelDetails.textContent = `${this.name} has ${this.rooms} rooms available`;
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

// bookBtn.addEventListener("click", () => {
// 	hotelA.bookroom();
// 	hotelA.booked++;
// 	hotelA.rooms--;
// 	numberBooked++;

// 	alertRoom();
// });

//Will require local storage - Lea

// Hotel constructor function additional properties

// bookReservation() - allows bookBtn button run and checks for the number of rooms available, if rooms > 0 then it
//runs it's functionality- increases the number of booked rooms, reduces the number of rooms

//cancelReservation() - will have a button that increases the number of rooms available,

// roomsAvailable() returns the current number of rooms available after everytime the bookroom() has been used.

//roomsBooked() returns the number of rooms that have been booked
// checkRoomAvaible() checks to see if the number of booked rooms is equal to the toal number of rooms rturns the roomsAva
