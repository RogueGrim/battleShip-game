import { renderShips, removeShips } from "./shipRender.js"

function randomise(board){
    const container = document.querySelector('.randomise')
    container.addEventListener('click',(e)=>{
        e.preventDefault()
        board.clearBoard()
        removeShips()
        board.randomPlacement()
        renderShips(board)
    })
}

export { randomise }