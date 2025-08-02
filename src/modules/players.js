import { gameBoard } from "./gameboard.js"

class players{
    constructor(name){
        this.name = name
        this.board = new gameBoard
        this.type = null
    }
}

export {players} 