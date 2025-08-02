import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { renderShips } from "./frontEnd_modules/shipRender.js"
import { gameLoop, player1turn } from "./modules/gameLogic.js"
import { players } from "./modules/players.js"


createBoard('player1')
createBoard('player2')

const player1 = new players('player1')
const player2 = new players('player2')

player1.board.randomPlacement()
renderShips(player1.board)
player2.board.randomPlacement()
player1turn(player2.board)
gameLoop(player1.board)




