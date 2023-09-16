function changeBackgroundColor() {
    setInterval(function () {
        document.body.style.backgroundColor = getRandomColor();
    }, 5000);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

changeBackgroundColor();
