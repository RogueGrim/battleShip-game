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
    for(let i = 1; i <=10; i++){
        const outerLabel = document.createElement('div')
        outerLabel.innerHTML = i
        outerLabel.classList.add('label')
        board.appendChild(outerLabel)
    }

    //loop over the letter array and creating the divs
    letters.forEach(element => {
        const label = document.createElement('div')
        label.innerHTML = element
        label.classList.add('label')
        board.appendChild(label)
        for(let j = 1; j <= 10; j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.setAttribute('value',`${element}${j}`)
            board.appendChild(cell)
        }
    });
    container.appendChild(board)

}
export {createBoard}

