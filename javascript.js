const grid = document.querySelector(".container")

const makeDivs = (num, i=0) => {
    var boxDimensions =960/num
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
    var cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(function(cells) {
      cells.addEventListener('mouseenter', (e) => {
          cells.classList.add('filled')
    })
    })
}

const clearGrid = () => {
    document.querySelector('.container').innerHTML=''
}

const reset = document.querySelector('.reset')
reset.onclick= () => {
    var cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(function(cells) {
        cells.classList.remove('filled')
    })
}