import { declareWinner } from '../frontEnd_modules/declareWinner.js';
import { renderHit } from '../frontEnd_modules/renderHits.js'

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

function gameLoop(board1,board2){
    if(board1.allShipSunk() || board2.allShipSunk()){
        console.log('GameOver')
        declareWinner(board1)
        return
    }
    setTimeout(()=>{
        player2Turn(board1)
    },2000)
}


export { SetUpPlayerTurn }