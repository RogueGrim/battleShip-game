function declareWinner(player){
    const container = document.querySelector('.container')
    const popUp = document.createElement('.div')
    popUp.classList.add('popUp')

    if(player.board.allShipSunk()){
        popUp.innerText = 'PLayer 1 Wins!!!'
    }else{
        popUp.innerText = 'PLayer 2 Wins!!!'
    }
    const playAgain = document.createElement('button')
    playAgain.innerText = 'Play Again?'
    container. appendChild(playAgain)
    container.appendChild(popUp)
}

export { declareWinner }