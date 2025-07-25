//for creating a 10x10 board of divs 

function createBoard(name){
    const container = document.querySelector('.container')

    const board = document.createElement('div')
    board.classList.add('board')
    board.setAttribute('name',name)

    let letters = ['A','B','C','D','E','F','G','H','I','J'] //array to loop over letters for each row

    const emptyArea = document.createElement('div') //for placing an empty div in the corner
    board.appendChild(emptyArea)

    //loop for attaching the numbers to each cell
    letters.forEach(element =>{
        const outerLabel = document.createElement('div')
        outerLabel.innerHTML = element
        outerLabel.classList.add('label')
        board.appendChild(outerLabel)
    })
    
    //loop over the letter array and creating the divs
    for(let i = 1; i <= 10;i++){
        const label = document.createElement('div')
        label.innerHTML = i
        label.classList.add('label')
        board.appendChild(label)
        for(let j = 0; j < 10; j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.x = i - 1 //row index
            cell.dataset.y = j //column index
            board.appendChild(cell)
        }
    }

    container.appendChild(board)

}
export {createBoard}

