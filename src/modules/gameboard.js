import { ship } from "./ships.js"

class gameBoard{
    //makes a 2D array and fills it with info
    constructor(len = 10){
        this.len = len
        this.mat = Array.from({length : len}, ()=> 
            Array.from({length : len},()=>({
                ship: null,
                isHit:false
            }))
        )
        this.ships = [] //array for storing all ships
    }
    //checks if within the bounds of array
    inBound(x,y){
        return x>= 0 && x < this.len && y >= 0 && y < this.len
    }
    //used to place ships
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
        this.ships.push(ship)   //pushes ship into the Ships array
    }
    //randomly places ships
    randomPlacement(){
        const toPlace = [
            new ship('destroyer',2),
            new ship('submarine',3),
            new ship('battleship',4),
            new ship('carrier',5)
        ]

        toPlace.forEach(ship=>{
            let plased = false
            while(!plased){
                const x = Math.floor(Math.random()*10)
                const y = Math.floor(Math.random()*10)

                try{
                    this.placeShip(ship,x,y,ship.isHorizontal)
                    plased = true
                }catch(Error){
                    
                }
            }
        })
    }
    //recives attack data from the other player
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
    //checks for all ships sunk
    allShipSunk(){
        return this.ships.every(ship => ship.isSunk)
    }
}

export {gameBoard}