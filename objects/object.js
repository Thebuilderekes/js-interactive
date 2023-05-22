class Hotel {
  constructor(name, hasGym, hasPool) {
    this.name = name;
    this.hasGym = hasGym;
    this.hasPool = hasPool;
  }

  checkAvailability() {
    // Implement availability check logic here
    // Return true or false based on availability
    return true;
  }

  bookRoom() {
    // Implement room booking logic here
    // Return a confirmation message or any relevant data
    return 'Room booked successfully!';
  }

  cancelBooking() {
    // Implement booking cancellation logic here
    // Return a cancellation confirmation message or any relevant data
    return 'Booking canceled!';
  }
}

class DummyHotelA extends Hotel {
  constructor(name) {
    super(name, true, false);
    this.additionalProperty = 'Some additional property';
  }

  // Add additional methods specific to DummyHotelA if needed
  // ...
}

class DummyHotelB extends Hotel {
  constructor(name) {
    super(name, false, true);
    this.anotherAdditionalProperty = 'Another additional property';
  }

  // Add additional methods specific to DummyHotelB if needed
  // ...
}

//In this example, we have two dummy hotels: DummyHotelA and DummyHotelB. Both of them inherit from the Hotel class using the extends keyword.

//Each dummy hotel has its own constructor that calls the parent class constructor (super) and sets additional properties specific to the respective hotel.

//You can add additional methods and properties specific to each dummy hotel class if needed.

//Here's an example usage of the dummy hotels:

//javascript

const hotelA = new DummyHotelA('Hotel A');
console.log(hotelA.name); // Output: Hotel A
console.log(hotelA.hasGym); // Output: true
console.log(hotelA.hasPool); // Output: false
console.log(hotelA.additionalProperty); // Output: Some additional property
console.log(hotelA.checkAvailability()); // Output: true

const hotelB = new DummyHotelB('Hotel B');
console.log(hotelB.name); // Output: Hotel B
console.log(hotelB.hasGym); // Output: false
console.log(hotelB.hasPool); // Output: true
console.log(hotelB.anotherAdditionalProperty); // Output: Another additional property
console.log(hotelB.bookRoom()); // Output: Room booked successfully!

//Feel free to customize and extend the dummy hotel classes according to your specific needs.
