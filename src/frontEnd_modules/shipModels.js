//create the divs for the ships 
function shipCreate(name,length){
    const container = document.querySelector('.ships')
    const ship = document.createElement('div')
    ship.classList.add('ship')
    ship.dataset.type = name
    ship.style.backgroundColor = 'cyan'
    ship.style.height = '30px'
    ship.style.width = `${30*length}px` //multiply the length by width of the individual cells
    container.appendChild(ship)
}

export { shipCreate }