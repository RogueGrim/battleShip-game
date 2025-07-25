import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { renderShips } from "./frontEnd_modules/shipRender.js"
import { checkType } from "./frontEnd_modules/typeSelector.js"

createBoard('player')

document.getElementsByName('type').forEach((e)=>{
    e.addEventListener('click',checkType)
})

renderShips(0,0)