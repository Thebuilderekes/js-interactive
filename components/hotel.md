## Hotel constructor function additional properties

makeReservation() - allows bookBtn button run and checks for the number of rooms available, if rooms > 0 then it runs it's functionality- increases the number of booked rooms, reduces the number of rooms.

cancelReservation() - will have a button that increases the number of rooms available,

### challenges I faced:

I coudn't get all the buttons to map to the indiviual hotels until i realized that i need to create the entire card included with the gallery and buttons using the map method on the hotels array, and then make the event listeners on each button return their respective function call on click.

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
