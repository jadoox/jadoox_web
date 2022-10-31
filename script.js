function backgroundChange() {

    var button = document.getElementById("1");

    if (document.body.style.backgroundImage == 'url("/wallhaven-k93l37.jpg")') {
        document.body.style.backgroundImage = '';
        button.innerText = 'Boring background?'
    }
    else {
        document.body.style.transition = 'all 1s ease-in-out';
        document.body.style.backgroundImage = 'url("/wallhaven-k93l37.jpg")'
        button.innerText = 'Better?'
    }
}