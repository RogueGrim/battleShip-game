function renderShips(x,y){
    const container = document.querySelector(`[data-x='${x}'][data-y='${y}']`)
    container.classList.add('ship')
}

export { renderShips }