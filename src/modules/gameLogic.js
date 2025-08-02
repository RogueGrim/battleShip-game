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
function player1turn(board){
    const container = document.getElementById('player2')
    const cells = container.querySelectorAll('.cell')
    let listenerAttached = false
    cells.forEach(cell=>{
        if(cell.classList.contains('hit') || cell.classList.contains('shipHit')) return
        cell.addEventListener('click',()=>{
            const x = parseInt(cell.dataset.x)
            const y = parseInt(cell.dataset.y)
            renderHit('player2',board,x,y) //takes coordinates and passes it to the rendering logic
        })
    })
    listenerAttached = true
    
}

function gameLoop(board1){
    const container = document.getElementById('player2')
    const cell = container.querySelectorAll('.cell')
    cell.forEach(cell=>{
        cell.addEventListener('click',()=>{
            setTimeout(()=>{
                player2Turn(board1)
            },1000)
        })
    })
}

export { gameLoop,player1turn }