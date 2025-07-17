function createBoard(name){
    const container = document.querySelector('.container')

    const board = document.createElement('div')
    board.classList.add('board')
    board.setAttribute('name',name)

    let letters = ['A','B','C','D','E','F','G','H','I','J']

    const emptyArea = document.createElement('div')
    board.appendChild(emptyArea)

    for(let i = 1; i <=10; i++){
        const outerLabel = document.createElement('div')
        outerLabel.innerHTML = i
        outerLabel.classList.add('label')
        board.appendChild(outerLabel)
    }

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

