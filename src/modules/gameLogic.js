import { declareWinner } from '../frontEnd_modules/declareWinner.js';
import { renderHit } from '../frontEnd_modules/renderHits.js'
import { addTurn, removeTurn } from '../frontEnd_modules/waitForTurn.js';
import { createBoard } from '../frontEnd_modules/boardMaker.js'
import { players } from './players.js'
import { renderShips } from '../frontEnd_modules/shipRender.js'
import { randomise, reset, start } from '../frontEnd_modules/btnInteraction.js'

//function to randomly select a cell to attack the player
function player2Turn(board){
    const container = document.getElementById('player1')
    let x ,y, cell;
    do{
        x = Math.floor(Math.random()*10)
        y = Math.floor(Math.random()*10)
        cell = container.querySelector(`[data-x='${x}'][data-y='${y}']`)

    }while(cell.classList.contains('hit') || cell.classList.contains('shipHit'))

    if(board.mat[x][y].ship){
        cell.classList.add('shipHit')
    }else{
        cell.classList.add('hit')
    }
}
//function to attach event listener to the enemy gameboard
function SetUpPlayerTurn(board1,board2){
    const container = document.getElementById('player2')
    const cells = container.querySelectorAll('.cell')
    
    cells.forEach(cell=>{
        cell.addEventListener('click',()=>{
             if(cell.classList.contains('hit') || cell.classList.contains('shiphit')){
                console.log('Try Again')
                return
            }
            const x = parseInt(cell.dataset.x)
            const y = parseInt(cell.dataset.y)
            renderHit('player2',board2,x,y) //takes coordinates and passes it to the rendering logic
            gameLoop(board1,board2)
        })
    })
}

//function that runs the game
function gameLoop(board1,board2){
    if(board1.allShipSunk() || board2.allShipSunk()){
        console.log('GameOver')
        declareWinner(board1) //for rendering the winner
        reset()
        return
    }
    addTurn() //for rendering waiting flag
    //after timeout plays the ai turn
    setTimeout(()=>{
        player2Turn(board1)
        removeTurn() // removes the waiting flag
    },1000)
}

//function that loads the initial state of game
function InitialSetUp(){
    createBoard('player1')

    const player1 = new players('player1')
    const player2 = new players('player2')

    player1.board.randomPlacement()
    renderShips('player1',player1.board)
    player2.board.randomPlacement()
    randomise(player1.board,player2.board)
    start(()=>{startGame(player1.board,player2.board)}) //event listener for start button
}

//function to start the game
function startGame(board1,board2){
    createBoard('player2')
    SetUpPlayerTurn(board1,board2)
    const btn = document.querySelector('.buttons')
    btn.style.display = 'none' //hides the buttons upon starting the game
}

export { InitialSetUp  }