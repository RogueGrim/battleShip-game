
function checkHit(board){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell=>{
        cell.addEventListener('click',()=>{
            if(board.mat[cell.dataset.x][cell.dataset.y].ship){
                cell.classList.add('shipHit')
                board.recieveAttack(cell.dataset.x,cell.dataset.y)
            }else{
                cell.classList.add('hit')
            }
        })
    })
}

export {checkHit}