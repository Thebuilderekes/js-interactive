const images = [
	"/img/compressed/hotelroom1-800.jpg",
	"/img/compressed/hotelroom2-800.jpg",
	"/img/compressed/hotelroom3-800.jpg",
];

export const thumbnails = document.createElement("div");
export const preview = document.createElement("figure");
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

//we first define an array of image paths. We also set up the HTML structure for our gallery with a div for the thumbnails and a div for the preview image. In the CSS, we style the layout of the gallery and set the initial display of the preview image to the first image in the images array.

// In the JavaScript, we first select the thumbnails and preview elements from the HTML. Then, we use a forEach loop to iterate over each image path in the  images  array. For each image path, we create a new  Image  object and set its  src  property to the corresponding image path. We also add an event listener to the image that will update the  src  property of the preview image to the corresponding image path when the user clicks on the thumbnail. Finally, we append the small image to the thumbnails div.

// When the user clicks on a small image in the gallery, the  click  event listener will update the  src  property of the preview image with the corresponding larger image, which is hidden by default. This will display the larger version of the image to the user.
