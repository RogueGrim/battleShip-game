import { Ship } from "./ships"

class gameBoard{
    constructor(len = 10){
        this.len = len
        this.mat = Array.from({length : len}, ()=> 
            Array.from({length : len},()=>({
                ship: null,
                isHit:false
            }))
        )
        this.ships = []
    }
    inBound(x,y){
        return x>= 0 && x < this.len && y >= 0 && y < this.len
    }
    placeShip(ship,x,y,isHorizontal){

        for(let i = 0; i < ship.length; i++){
            const nx = isHorizontal ? x : x+i
            const ny = isHorizontal ? y+i : y

            if(!this.inBound(nx,ny)){
                throw new Error('Ship out of Bound')
            }else if(this.mat[nx][ny].ship){
                throw new Error('Space Occupied')
            }else{
                this.mat[nx][ny].ship = ship
            }
        }
        this.ships.push(ship)
    }
    recieveAttack(x,y){
        if(!this.inBound(x,y)){
            return 'Invalid Move'
        }

        const cell = this.mat[x][y]
        if(cell.isHit){
            return 'Already Hit'
        }
        cell.isHit = true

        if(cell.ship){
            cell.ship.hit()
            cell.ship.checkSunk()
            return 'Hit'
        }
        return 'Miss'
    }
    allShipSunk(){
        return this.ships.every(ship => ship.isSunk)
    }
}

export {gameBoard}