var playerRed = "R";
var playerYellow = "Y"; 
var currPlayer = playerRed;

var gameOver = false;
var board;
var currColumns;

var rows = 6;
var columns = 7;

window.onload = function() {
    setGame();
} 

function setGame() {
    board = [];
    currColumns=[5,5,5,5,5,5,5];

    for (let r = 0; r < rows; r++) {
        let row = [];

        for (let c = 0; c < columns; c++) {
            row.push('');
            let title = document.createElement("div");
            title.id = r.toString() + "-" + c.toString();
            title.innerText = title.id
            title.classList.add("title");
            title.addEventListener("click", setPiece); 
            document.getElementById("board").append(title);
        }

        board.push(row);
    }
}

function setPiece() {
    if (gameOver)
        return;

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    let originalR = currColumns[c]; 
    if (originalR < 0) {
        return;
    }

    board[originalR][c] = currPlayer;
    let title = document.getElementById(originalR.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        title.classList.add("red-piece");
        currPlayer = playerYellow;
    } else {
        title.classList.add("yellow-piece");
        currPlayer = playerRed;
    }

    currColumns[c] = originalR - 1; 
    checkWinner();
}

 

function checkWinner() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != '') {
                if (board[r][c] == board[r][c + 1] &&
                    board[r][c] == board[r][c + 2] &&
                    board[r][c] == board[r][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    function setWinner(r, c) {
        let winner = document.getElementById("winner");
        if (board[r][c] == playerRed) {
            winner.innerText = "Red wins";
        } else {
            winner.innerText = "Yellow wins";
        }
        gameOver = true;
    }

}


