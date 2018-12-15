class Game {
    constructor(parentElement, size) {
        this.fieldSize = 80;
        this.size = size;
        this.cellSize = (this.fieldSize / this.size) - 2;
        
        let gameField = addElement({
            classElem: 'game',
            parentElem: parentElement

        })

        this.headrElement = addElement({
            classElem: 'header',
            parentElem: gameField,
            value: 'Header'
        });

        this.fielElement = addElement({
            classElem: 'field',
            parentElem: gameField
        })

        this.footerElement = addElement({
            classElem: 'footer',
            parentElem: gameField,
            value: 'footer'
        })

        this.field = [];
        let num = 0;
        for (let i = 0; i < this.size; i++) {
            this.field[i] = [];
            for (let k = 0; k < this.size; k++) {
                if (k % 2 !== 0) {
                    this.field[i][k] = new Cell(num, this)
                    num++
                }
                else
                    this.field[i][k] = new Cell(num, this)
            }
        };

        this.field = [].concat(...this.field);

        this.field.sort(this.createRandom);

        let attributeNum = 0;
        for (let i = 0; i < this.field.length; i++) {
            this.fielElement.appendChild(this.field[i].cellElement())
            let a = this.field[i].cellElement()
            a.setAttribute('data_oreder', attributeNum)
            this.field[i].addId();
            attributeNum++;
        };

        window.addEventListener('click', function (e) {
            if (e.target.className == "cell") {
                this.openCell(e.target)
                this.checkWin()
            }
        }.bind(this))
        this.arr = [];
        this.flag;
    }

    openCell(domElement) {
        for (let i = 0; i < this.field.length; i++) {
            if (domElement == this.field[i].cellElement() && domElement !== this.flag &&
                domElement != this.arr[0]) {

                let clsaCell = document.querySelectorAll('.cell');
                if (clsaCell.length == 2) {
                    this.arr.push(this.field[i]);
                }

                this.arr.push(this.field[i]);
                this.flag = domElement;

                for (let k = 0; k < this.arr.length; k++) {
                    this.arr[k].removeId();
                    if (this.arr.length > 2) {

                        if (this.arr[0].cellElement().getAttribute("data") == this.arr[1].cellElement().getAttribute("data")) {
                            this.arr[0].empti();
                            this.arr[1].empti();
                            this.arr.length = 0;
                            this.flag = '';
                        } else {
                            this.arr[0].addId()
                            this.arr[1].addId()
                            this.arr.length = 0;
                            this.flag = '';

                        }

                        if (this.arr.length == 0 && domElement.hasAttribute('id')) {
                            this.arr.push(this.field[i]);
                            this.flag = domElement;
                            this.arr[k].removeId();
                        }
                    }
                }
            }
        }
    }

    checkWin() {
        let empti = document.querySelectorAll('.empti');
        if (empti.length == this.size * this.size) {
            this.headrElement.innerHTML = 'You are a winner';
            this.headrElement.style.color = 'white';
        }
    }

    createRandom() {
        return Math.random() - 0.5;
    }
}











