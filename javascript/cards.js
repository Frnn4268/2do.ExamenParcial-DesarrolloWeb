document.addEventListener('DOMContentLoaded', function () {
    const column1 = document.getElementById('column-1');
    const column2 = document.getElementById('column-2');
    const column3 = document.getElementById('column-3');

    createCard(column1, 'CSS', '/img/1.jpg', 'Diseña tu WEB con CSS');
    createCard(column1, 'Python', '/img/2.png', 'Lenguaje de programación Python');
    createCard(column2, 'Java', '/img/3.png', 'Lenguaje de programación Java');
    createCard(column2, 'C++', '/img/4.png', 'Lenguaje de programación C++');
    createCard(column3, 'HTML', '/img/5.png', 'Lenguaje de etiquetas HTML');
    createCard(column3, 'JS', '/img/6.png', 'Lenguaje de programación JS');

    // Función para crear una tarjeta
    function createCard(column, title, imageUrl, description) {
        const card = document.createElement('div');
        card.className = 'card';
        card.draggable = true; // Permite arrastrar la tarjeta
        card.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
        `;

        column.appendChild(card);

        makeCardDraggable(card);
    }

    function makeCardDraggable(card) {
        card.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', card.id);
        });

        card.addEventListener('dragover', function (event) {
            event.preventDefault();
        });

        card.addEventListener('drop', function (event) {
            event.preventDefault();
            const cardId = event.dataTransfer.getData('text/plain');
            const sourceColumn = document.querySelector(`#${cardId}`).parentNode;
            const targetColumn = event.target.closest('.column');

            if (sourceColumn && targetColumn) {
                if (sourceColumn !== targetColumn) {
                    targetColumn.appendChild(document.querySelector(`#${cardId}`));
                }
            }
        });
    }
});
