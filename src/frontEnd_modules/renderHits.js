//function to render hits on click events
function renderHit(name,board,x,y){
    const container = document.getElementById(name)
    const cell = container.querySelector(`[data-x='${x}'][data-y='${y}']`)
    if(cell.classList.contains('hit') || cell.classList.contains('shipHit')) return 'Already Hit'

    if(board.mat[x][y].ship){
        cell.classList.add('shipHit')
        board.recieveAttack(x,y) //passes coordinates to attack function in the gameboard class
        return 'shipHit'
    }else{
        cell.classList.add('hit')
        return 'Hit'
    }

}

export { renderHit }