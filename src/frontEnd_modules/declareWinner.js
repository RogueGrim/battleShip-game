function declareWinner(board){
    const container = document.querySelector('.container')
    const popUp = document.createElement('div')
    popUp.classList.add('popUp')

    if(board.allShipSunk()){
        popUp.innerText = 'PLayer 2 Wins!!!'
    }else{
        popUp.innerText = 'Player 1 Wins!!!'
    }
    const playAgain = document.createElement('button')
    playAgain.innerText = 'Play Again?'
    container. appendChild(playAgain)
    container.appendChild(popUp)
}

export { declareWinner }