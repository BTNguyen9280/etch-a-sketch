// Create grid function
const grid = document.querySelector(".container")

const makeDivs = (num, i=0) => {
    let boxDimensions =960/num
    if (i >=num*num) {
        var elements = document.getElementsByClassName('cell');
        Array.from(elements).forEach(function(element) {
            element.style.height = boxDimensions + "px";
            element.style.width = boxDimensions + "px";
        })
        return
    }
    let cells = document.createElement('div')
    cells.classList.toggle('cell');
    grid.appendChild(cells);
    return makeDivs(num,++i);
}

const makeGrid = document.querySelector('.makeGrid')
makeGrid.onclick = () => {
    var size  = prompt('Enter a grid size')
    if (size > 100) {
        alert('Enter a number lower than 101')
        var size = prompt('Enter a grid size')
    }
    clearGrid()
    makeDivs(size)
    let cells = document.getElementsByClassName('cell');
    if (blackFill) { 
      Array.from(cells).forEach(cells => {
      cells.addEventListener('mouseenter',BlackFillFunction)
      })
    }
    }

//Fill color selector (black)
let blackFill = true
const blackOn = document.querySelector('.black')
blackOn.onclick= () => {
    blackFill = true
    let cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cells => { 
        cells.addEventListener('mouseenter',BlackFillFunction)
    })
}

const BlackFillFunction = (event) => {
    if (blackFill) {
    event.target.style.backgroundColor = ''
    event.target.classList.add('filled')
    }
}    

//Fill color selector (Random RGB)
const rainbowOn = document.querySelector('.rainbow')
rainbowOn.onclick = () => {
    blackFill = false
    let cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cells => {
        cells.addEventListener('mouseenter',rgbFillFunction)
    })
}

const rgbFillFunction = (event) => {
    if (!blackFill) {
    randomColor = randomColorGenerator()
    event.target.classList.remove('filled')
    event.target.style.backgroundColor = '#' + randomColor
    }
}

//Remove existing grid
const clearGrid = () => {
    document.querySelector('.container').innerHTML=''
}

//Reset colors to white
const reset = document.querySelector('.reset')
reset.onclick= () => {
    let cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(function(cells) {
        cells.style.backgroundColor = ''
        cells.className='cell'
    })
}

//Random Color Generator
const randomColorGenerator = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}

