const body = document.querySelector(".background");

const IMG_NUMBER = 1;

/*function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}*/
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRendom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init(){
const randomNumber = genRendom();
//paintImage(randomNumber);
paintImage(randomNumber);
}

init()
