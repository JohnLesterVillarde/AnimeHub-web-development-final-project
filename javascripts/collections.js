import { figureTemplate } from "./collectionTemplate.js";
let collectionContainer = document.querySelector(".collection-container");
let collectionList = localStorage.getItem("library");
collectionList = JSON.parse(collectionList);

if (collectionList) {
	collectionList.forEach((library) => {
		console.log(library.title);
		console.log(library.image);

		let figure = figureTemplate(library.title, library.image);
		collectionContainer.append(figure);
	});
} else {
	console.log("Array not found ");
}

//remove item
let removeButtons = collectionContainer.querySelectorAll(".remove");

removeButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		const figureItem = event.target.parentNode;
		const itemTitle = figureItem.querySelector("b").textContent;
		console.log(itemTitle);

		let newList = collectionList.filter((item) => {
			return item.title !== itemTitle;
		});

		localStorage.setItem("library", JSON.stringify(newList));
		location.reload();
	});
});

removeButtons.forEach((button) => {
	button.addEventListener("mouseover", (event) => {
		const image = event.target.parentNode.querySelector("img");
		image.style.filter = "grayscale(85%)";
		image.style.transform = "scale(1.2)";
		image.style.transition = "0.5s";
	});

	button.addEventListener("mouseout", (event) => {
		const image = event.target.parentNode.querySelector("img");
		image.style.filter = "none";
		image.style.transform = "none";
	});
});

//preview collection

// let figureElement = document.querySelectorAll('figure');

// figureElement.forEach(figure => {
//     figure.addEventListener('click', event => {
//         let title = figure.querySelector('b').textContent;
//         let image = figure.querySelector('img').src;
//         let figureData = {figureTitle : title, figureImage : image };
//         console.log(title);
//         console.log(image);

//         localStorage.setItem('figureData', JSON.stringify(figureData));
//         window.location.href = 'preview-content.html';
//     })
// })
