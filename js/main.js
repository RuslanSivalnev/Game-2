let addElement = function ({ classElem, parentElem, value }, tag = 'div') {
    let element = document.createElement(tag);
    element.className = classElem;
    if (parentElem) {
        parentElem.appendChild(element);
    }
    if (value) {
        element.innerHTML = value;
    }
    return element;
}

let fieldSize = parseInt(window.prompt('choose size 4,6,8,10?', 4), 10)

let game = new Game(document.body, (fieldSize % 2 == 0 &&
    fieldSize != 0 &&
    fieldSize < 11) ? fieldSize : 4);

