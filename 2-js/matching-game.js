let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");

function generateFaces() {
    alert("IN" + numberOfFaces)
    let face;
    let randomTop;
    let randomLeft;

    for (let index = 0; index < numberOfFaces; index++) {

        face = document.createElement('img');
        randomTop = Math.floor(Math.random() * 400) + 1;
        randomLeft = Math.floor(Math.random() * 400) + 1;
        face.src = "/4-images/smile.png";
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
}
