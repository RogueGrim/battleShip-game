import { gameBoard } from "./gameboard"

class players{
    constructor(name){
        this.player = name
        this.board = new gameBoard
        this.type = null
    }
}

export {players} 