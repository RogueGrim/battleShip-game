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
})

test('Ship Array', ()=>{
    let boat = new Ship(2)
    let game = new gameBoard
    game.placeShip(boat,0,2,true)
    expect(game.ships).toContainEqual({length:2,hits:0,isSunk:false})
})