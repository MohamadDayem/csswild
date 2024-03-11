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

    r= currColumns[c];
    if (r<0){
        return;
    }


    board[r][c]= currPlayer;
    let title = document. getElementById(r.toString() + "-"+c.toString());
    if (currPlayer == playerRed ){
        title.classList.add("red-piece");
        currPlayer = playerYellow;
  
    }
    else{
        title.classList.add("yellow-piece");
        currPlayer = playerRed;
        
    }


    r -= 1;
    currColumns[c]= r;



 
}

