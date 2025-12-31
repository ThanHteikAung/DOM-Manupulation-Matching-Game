let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector('#rightSide');

function generateFaces() {
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
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);

}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.children.length > 0) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }
    while (theRightSide.children.length > 0) {
        theRightSide.removeChild(theRightSide.firstChild)
    }
    generateFaces();
}

function gameOver() {
    alert("Game Over");
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);

}

