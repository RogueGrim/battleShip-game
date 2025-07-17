import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { menu } from "./frontEnd_modules/popUp.js"

createBoard('player')
createBoard('enemy')

document.querySelector('.play').addEventListener('click',menu)