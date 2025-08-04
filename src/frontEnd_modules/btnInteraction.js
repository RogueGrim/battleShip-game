import { renderShips, removeShips } from "./shipRender.js"
// function for random button
function randomise(board1,board2){
    const container = document.querySelector('.randomise')
    container.addEventListener('click',(e)=>{
        e.preventDefault()
        board1.clearBoard() //clears the player board
        board2.clearBoard() //clears the enemy board
        removeShips() //removes ship render
        board1.randomPlacement() // calls random placement on player board
        board2.randomPlacement() // calls random placement on enemy board
        renderShips('player1',board1) //renders new ships
    })
}
//function to add event listener on play button
function start(callback){
    const container = document.querySelector('.play')
    container.addEventListener('click',callback)
}

//function to add event listener on play again button on the popUp Menu
function reset(){
    const container = document.querySelector('.playAgain')
    container.addEventListener('click',()=>window.location.reload())
}

export { randomise, start, reset }