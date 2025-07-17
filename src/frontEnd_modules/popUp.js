function menu(){
    const container = document.querySelector('.container')
    const popUp = document.createElement('div')
    popUp.classList.add('popUp')

    const nameLabel = document.createElement('p')
    nameLabel.innerHTML = 'Player 1'
    popUp.appendChild(nameLabel)

    const name = document.createElement('input')
    name.classList.add('name')
    popUp.appendChild(name)

    const play = document.createElement('button')
    play.innerText = 'Start'
    play.classList.add('startGame')
    popUp.appendChild(play)

    container.appendChild(popUp)
}

export { menu }