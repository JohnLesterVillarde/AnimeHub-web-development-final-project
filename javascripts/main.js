
let figureElement = document.querySelectorAll('figure');

figureElement.forEach(figure => {
    figure.addEventListener('click', event => {
        let title = figure.querySelector('b').textContent;
        let image = figure.querySelector('img').src;
        let figureData = {figureTitle : title, figureImage : image };
        console.log(title);
        console.log(image);

        localStorage.setItem('figureData', JSON.stringify(figureData));
        window.location.href = 'preview-content.html';
    })
})