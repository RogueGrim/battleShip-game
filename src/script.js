import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { gameBoard } from "./modules/gameboard.js"
import { checkHit } from "./frontEnd_modules/hitDetector.js"
import { renderShips } from "./frontEnd_modules/shipRender.js"
import { randomise } from "./frontEnd_modules/btnInteraction.js"
import { player2Turn } from "./modules/gameLogic.js"
createBoard('player1')
createBoard('player2')

const board = new gameBoard
board.randomPlacement()
renderShips(board)
checkHit('player1',board)
randomise(board)


