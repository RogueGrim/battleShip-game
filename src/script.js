import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { gameBoard } from "./modules/gameboard.js"
import { checkHit } from "./frontEnd_modules/hitDetector.js"
import { renderShips } from "./frontEnd_modules/shipRender.js"

createBoard('player')

const board = new gameBoard
board.randomPlacement()
renderShips(board)
checkHit(board)


