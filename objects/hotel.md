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
