function player2Turn(board){
    const container = document.getElementById('player1')
    const x = Math.floor(Math.random()*10)
    const y = Math.floor(Math.random()*10)
    const cell = container.querySelector(`[data-x='${x}'][data-y='${y}']`)
    if(board.mat[cell.dataset.x][cell.dataset.y].ship){
        cell.classList.add('shipHit')
    }else{
        cell.classList.add('hit')
    }

}

export { player2Turn }