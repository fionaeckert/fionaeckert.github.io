
board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]
count = 0
player = 'Player 1'
symbol = 'X'
gameOver = false
p1count = 0
p2count = 0

function setCord(x,y) {
    if (board[x][y] == ' ') {
        board[x][y] = symbol
        setTimeout(document.getElementById('tile'+x+y).innerText = symbol,3000)
        //count ++
        gameOver = checkWin(symbol,player)
        
        if (gameOver == false){
            if (count % 2 == 0) {
                // player = 'Player 1'
                // symbol = 'X'
                // alert(player+' turn')
                count ++
                comp()
            }
       
            // else {
            //     player = 'Player 2'
            //     symbol = 'O'
            //     alert(player+' turn')
            // }
        }
        else if (gameOver == true) {
            if (player == 'Player 1'){
                p1count++
                console.log('Player wins: ', p1count)
                document.getElementById('player1').innerText = 'Player 1: X Wins: ' + p1count
            }
            else if(player == 'Computer'){
                p2count++
                document.getElementById('player2').innerText = 'Player 2: O Wins: ' + p2count
            }
        }  
        
    }
    
}

function checkWin(sym, play) {
    if (sym == board[0][0] && sym == board[0][1] && sym == board[0][2]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[1][0] && sym == board[1][1] && sym == board[1][2]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[2][0] && sym == board[2][1] && sym == board[2][2]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[0][0] && sym == board[1][0] && sym == board[2][0]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[0][1] && sym == board[1][1] && sym == board[2][1]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[0][2] && sym == board[1][2] && sym == board[2][2]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[0][0] && sym == board[1][1] && sym == board[2][2]){
        alert(play + " has won!")
        return true
    }
    else if (sym == board[2][0] && sym == board[1][1] && sym == board[0][2]){
        alert(play + " has won!")
        return true
    }
    else {
        return false
    }
}


function reset() {
    board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]
    count = 0
    player = 'Player 1'
    symbol = 'X'  
    gameOver = false
    document.getElementById('tile00').innerText = ' '
    document.getElementById('tile01').innerText = ' '
    document.getElementById('tile02').innerText = ' '
    document.getElementById('tile10').innerText = ' '
    document.getElementById('tile11').innerText = ' '
    document.getElementById('tile12').innerText = ' '
    document.getElementById('tile20').innerText = ' '
    document.getElementById('tile21').innerText = ' '
    document.getElementById('tile22').innerText = ' '

}

function comp() {
    player = 'Computer'
    symbol = 'O'

    xAxis = Math.round(Math.random() * (2))
    yAxis = Math.round(Math.random() * (2))

    while (board[xAxis][yAxis] !=  ' '){
        xAxis = Math.round(Math.random() * (2) )
        yAxis = Math.round(Math.random() * (2) ) 
    }

    // setTimeout async(setCord(xAxis,yAxis),3000)
    setCord(xAxis,yAxis)
    if (gameOver == false) {
        count ++
        player = 'Player 1'
        symbol = 'X'
    // alert(player+' turn')
    }
}