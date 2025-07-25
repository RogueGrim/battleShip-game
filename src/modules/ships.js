class ship{
    constructor(name,length){
        this.name = name
        this.length = length
        this.hits = 0
        this.isSunk = false
        this.isHorizontal = true
    }
    hit(){
        this.hits++
    }
    checkSunk(){
        if(this.length == this.hits){
            this.isSunk = true
        }
    }
    changeOrientation(){
        if(this.isHorizontal == true){
            this.isHorizontal = false
        }
    }
}

export {ship}