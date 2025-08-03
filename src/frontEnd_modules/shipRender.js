
//function to render ships on the board
function renderShips(name,board){
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            if(board.mat[i][j].ship){
                const container = document.getElementById(name)
                const cell = container.querySelector(`[data-x='${i}'][data-y='${j}']`)
                cell.classList.add('ship')
                cell.dataset.name = board.mat[i][j].ship.name
            }
        }
    }
     
}

//function to deRender Ships
function removeShips(){
    const container = document.querySelectorAll('.cell')
    container.forEach(cell=>{
        cell.classList.remove('ship')
        cell.classList.remove('hit')
        cell.classList.remove('shipHit')
    })
}

export { renderShips,removeShips}