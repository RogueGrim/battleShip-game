// function to attach event listener on the player board (enemy)
function checkHit(name,board){
    const container = document.getElementById(name) //selects the player div
    const cells = container.querySelectorAll('.cell') //aataches event listener on every cell on the player board
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