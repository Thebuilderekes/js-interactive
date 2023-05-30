import "./hotelList.js";
import { hotels } from "./hotelList.js";

//create button container function
export const buttonContainer = Object.assign(document.createElement("div"), {
	className: "button-container",
});

//create buttons
const bookBtn = Object.assign(document.createElement("button"), {
	className: "bookbtn",
});
const cancelBtn = Object.assign(document.createElement("button"), {
	className: "cancelbtn",
});

//add buttons to button container
buttonContainer.appendChild(bookBtn);
buttonContainer.appendChild(cancelBtn);

bookBtn.textContent = "Book Room";

// for (let i = 0; i < hotels.length; i++) {
// 	bookBtn.onclick = () => hotels[i].makeReservation();
// }

cancelBtn.textContent = "Cancel Booking";

// cancelBtn.onclick = () => hotels[i].cancelReservation();
// for (let i = 0; i < hotels.length; i++) {
// 	cancelBtn.onclick = () => hotels[i].makeReservation();
// }

for (let i = 0; i < hotels.length; i++) {
	(function (index) {
		bookBtn.onclick = () => hotels[index].makeReservation();
		cancelBtn.onclick = () => hotels[index].cancelReservation();
	})(i);
}
