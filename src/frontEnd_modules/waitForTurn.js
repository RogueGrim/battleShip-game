function addTurn(){
    const container = document.getElementById('player2')
    const hide = document.createElement('div')
    const text = document.createElement('p')
    hide.classList.add('wait')
    text.innerHTML = 'Wait For Turn...'
    hide.appendChild(text)
    container.appendChild(hide)
}

function removeTurn(){
    const doc = document.querySelector('.wait')
    doc.remove()
}

export { addTurn,removeTurn }