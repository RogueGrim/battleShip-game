import { ship } from "../modules/ships";

test('Class check',()=>{
    let small_ship = new ship('hip',5)
    expect(small_ship).toEqual({'length':5,'hits':0,'isSunk':false})
})

test('hit check',()=>{
    let small_ship = new ship('hip',5)
    small_ship.hit()
    expect(small_ship.hits).toBe(1)
})

test('sunk check',()=>{
    let big_Ship = new ship('hip',10)
    while(big_Ship.isSunk == false){
        big_Ship.hit()
        big_Ship.checkSunk()
    }
    expect(big_Ship.isSunk).toBe(true)
})