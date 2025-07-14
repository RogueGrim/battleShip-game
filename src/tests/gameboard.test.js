import { gameBoard } from "../modules/gameboard";
import { Ship } from "../modules/ships";

test("inBound Test", ()=>{
    let game = new gameBoard
    expect(game.inBound(11,12)).toBe(false)
})

test('Ship placement', ()=>{
    let boat = new Ship(2)
    let game = new gameBoard
    expect(()=>{game.placeShip(boat,10,10,true)}).toThrow('Ship out of Bound')
    game.placeShip(boat,0,2,true)
    expect(()=>{game.placeShip(boat,0,3,true)}).toThrow('Space Occupied')
    expect(game.mat[0][2]).toEqual({ship:{length:2,hits:0,isSunk:false},isHit:false})
    expect(game.mat[0][3]).toEqual({ship:{length:2,hits:0,isSunk:false},isHit:false})
    expect(game.mat[0][4]).toEqual({ship:null,isHit:false})
    game.placeShip(boat,1,2,false)
    expect(game.mat[1][2]).toEqual({ship:{length:2,hits:0,isSunk:false},isHit:false})
    expect(game.mat[2][2]).toEqual({ship:{length:2,hits:0,isSunk:false},isHit:false})
    expect(game.mat[3][2]).toEqual({ship:null,isHit:false})
})

test('Ship Array', ()=>{
    let boat = new Ship(2)
    let game = new gameBoard
    game.placeShip(boat,0,2,true)
    expect(game.ships).toContainEqual({length:2,hits:0,isSunk:false})
})

test('Attack ships', ()=>{
    let game = new gameBoard
    let boat = new Ship(2)
    game.placeShip(boat,0,2,true)
    expect(game.recieveAttack(0,0)).toBe('Miss')
    expect(game.recieveAttack(0,2)).toBe('Hit')
    expect(game.recieveAttack(0,2)).toBe('Already Hit')
    expect(boat.hits).toBe(1)
    game.recieveAttack(0,3)
    expect(boat.isSunk).toBe(true)
})

test('All Sunk',()=>{
    let game = new gameBoard
    let boat = new Ship(1)
    game.placeShip(boat,0,2,true)
    game.recieveAttack(0,2)
    expect(game.allShipSunk()).toBe(true)
})