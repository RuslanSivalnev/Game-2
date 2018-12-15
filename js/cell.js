let setCellSize = function (cellElement, size) {
    cellElement.style.height = size + "vmin"
    cellElement.style.width = size + "vmin"
}
class Cell {
    constructor(num, game) {
        this.num = num;
        this.game = game;
        
        this.element = addElement({
            classElem: 'cell',
        });
        
        this.element.setAttribute('data', num);

        setCellSize(this.element, this.game.cellSize)
    }
    
    cellElement() {
        return this.element;
    }

    empti() {
        this.removeId();
        this.element.className = 'empti';
    }

    removeId() {
        return this.element.removeAttribute('id')
    }

    addId() {
        return this.element.setAttribute('id', 'x');
    }


}