//used to check the type of player selected and to hide and show the naming field
function checkType(){
    if(document.querySelector('.computer').checked){
        document.getElementById('player2').style.display = 'none'
    }else if(document.querySelector('.human').checked){
        document.getElementById('player2').style.display = 'inline'
    }
}

export {checkType}