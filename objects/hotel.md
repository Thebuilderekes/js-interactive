// Hotel constructor function additional properties

// makeReservation() - allows bookBtn button run and checks for the number of rooms available, if rooms > 0 then it runs it's functionality- increases the number of booked rooms, reduces the number of rooms.

//cancelReservation() - will have a button that increases the number of rooms available,

// roomsAvailable() returns the current number of rooms available after everytime the bookroom() has been used.

//roomsBooked() returns the number of rooms that have been booked
// checkRoomAvaible() checks to see if the number of booked rooms is equal to the toal number of rooms rturns the roomsAva

## Tools needed

Local storage vs session storage

### Local storage

Local storage lasts a lot longer than session storage. In fact, it stays in the
browser for as long as it is not deleted.

you can create a localStorage.js file:
``
localStorage.setItem("rooms", 30)
const roomsAvailable = localStorage.getItem("rooms")

``

### Session storage
