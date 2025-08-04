//fucntion to create a new div that shows the winner
function declareWinner(board){
    const container = document.querySelector('.container') 
    const popUp = document.createElement('div')
    const text = document.createElement('p')
    popUp.classList.add('popUp')
    
    //check for player1 ship status
    if(board.allShipSunk()){ 
        text.innerText = 'PLayer 2 Wins!!!'
    }else{
        text.innerText = 'Player 1 Wins!!!'
    }
    const playAgain = document.createElement('button')
    playAgain.innerText = 'Play Again?'
    playAgain.classList.add('playAgain')
    popUp.appendChild(text)
    popUp. appendChild(playAgain)
    container.appendChild(popUp)
}

export { declareWinner }