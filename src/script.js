import { createBoard } from "./frontEnd_modules/boardMaker.js"
import { renderShips } from "./frontEnd_modules/shipRender.js"
import { SetUpPlayerTurn } from "./modules/gameLogic.js"
import { players } from "./modules/players.js"


createBoard('player1')
createBoard('player2')

const player1 = new players('player1')
const player2 = new players('player2')

player1.board.randomPlacement()
renderShips('player1',player1.board)
player2.board.randomPlacement()
renderShips('player2',player2.board)
SetUpPlayerTurn(player1.board,player2.board)




