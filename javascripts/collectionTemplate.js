export const figureTemplate = (title, img) => {
	console.log(`img ${img}`);
	console.log(`title ${title}`);

	//let collectionContainer = document.querySelector('.collection-container');

	let figure = document.createElement("figure");
	figure.classList.add("collection-item"); // add classname for figure element

	let image = document.createElement("img");
	image.src = img;
	let remove = document.createElement("img");
	remove.classList.add("remove");
	remove.src = "img/x.png";

	let figcaption = document.createElement("figcaption");
	let b = document.createElement("b");
	let br = document.createElement("br");
	let i = document.createElement("i");
	let p = document.createElement("p");

	b.textContent = title;
	i.textContent = "2018";
	p.textContent = "Action, Comedy";

	// append child element for figcaption
	figcaption.appendChild(b);
	figcaption.appendChild(br);
	figcaption.appendChild(i);
	figcaption.appendChild(p);

	// append child element for figure
	figure.appendChild(image);
	figure.appendChild(remove);
	figure.appendChild(figcaption);

	// append figure to container
	//collectionContainer.appendChild(figure);

	return figure;
};
