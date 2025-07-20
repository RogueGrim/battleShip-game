import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { shipCreate } from "./frontEnd_modules/shipModels.js"
import { checkType } from "./frontEnd_modules/typeSelector.js"

createBoard('player')
createBoard('enemy')

shipCreate('carrier',5)
shipCreate('battleShip',4)
shipCreate('cruiser',3)
shipCreate('submarine',3)
shipCreate('destroyer',2)

document.getElementsByName('type').forEach((e)=>{
    e.addEventListener('click',checkType)
})