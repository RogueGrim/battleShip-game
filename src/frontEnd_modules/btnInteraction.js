import { renderShips, removeShips } from "./shipRender.js"
// function for random button
function randomise(board){
    const container = document.querySelector('.randomise')
    container.addEventListener('click',(e)=>{
        e.preventDefault()
        board.clearBoard() //clears the player board
        removeShips() //removes ship render
        board.randomPlacement() // calls random placement on player board
        renderShips(board) //renders new ships
    })
}

export { randomise }