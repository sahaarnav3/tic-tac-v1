//HTML elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const button1 = document.querySelector('.op');
let value = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let value1 = [0,1,2,3,4,5,6,7,8];

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;


//functions
function checkGameStatus(location){
    let a = Number(location[2]);
    if (xIsNext){
        value[a-1] = 1;
    }
    else {
        value[a-1] = 0
    }
    //win checker
    if (value[0] == value[1] && value[1] == value[2] && value[0] >= 0){
        winner = value[0];
        gameIsLive = false;
        cellDivs[0].classList.add('wincol');
        cellDivs[1].classList.add('wincol');
        cellDivs[2].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[0] == value[4] && value[4] == value[8] && value[0] >= 0){
        winner = value[0];
        gameIsLive = false;
        cellDivs[0].classList.add('wincol');
        cellDivs[4].classList.add('wincol');
        cellDivs[8].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[0] == value[3] && value[3] == value[6] && value[0] >= 0){
        winner = value[0];
        gameIsLive = false;
        cellDivs[0].classList.add('wincol');
        cellDivs[3].classList.add('wincol');
        cellDivs[6].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[6] == value[7] && value[7] == value[8] && value[6] >= 0){
        winner = value[6];
        gameIsLive = false;
        cellDivs[6].classList.add('wincol');
        cellDivs[7].classList.add('wincol');
        cellDivs[8].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[6] == value[4] && value[4] == value[2] && value[6] >= 0){
        winner = value[6];
        gameIsLive = false;
        cellDivs[6].classList.add('wincol');
        cellDivs[4].classList.add('wincol');
        cellDivs[2].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[3] == value[4] && value[4] == value[5] && value[3] >= 0){
        winner = value[3];
        gameIsLive = false;
        cellDivs[3].classList.add('wincol');
        cellDivs[4].classList.add('wincol');
        cellDivs[5].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[1] == value[4] && value[4] == value[7] && value[1] >= 0){
        winner = value[1];
        gameIsLive = false;
        cellDivs[1].classList.add('wincol');
        cellDivs[4].classList.add('wincol');
        cellDivs[7].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[2] == value[5] && value[5] == value[8] && value[2] >= 0){
        winner = value[2];
        gameIsLive = false;
        cellDivs[2].classList.add('wincol');
        cellDivs[5].classList.add('wincol');
        cellDivs[8].classList.add('wincol');
        if (winner == 0){
            winner = 2;
        }
        statusDiv.innerHTML = `${winner} Has WON..!!`;
    }
    else if (value[0] != -1 && value[1] != -1 && value[2] != -1 && value[3] != -1 && value[4] != -1 && value[5] != -1 && value[6] != -1 && value[7] != -1 && value[8] != -1 ){
        gameIsLive = false;
        statusDiv.innerHTML = `$It's A Tie .`;
    }
    else {
        if (xIsNext){
            statusDiv.innerHTML = `2's Chance`;
        }
        else{
            statusDiv.innerHTML = `1's Chance`;
        }
        xIsNext = !xIsNext;
    }
}

//event handlers
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `1's Chance`;
    winner = null;
    gameIsLive = true;
    for (const cellClear of cellDivs){
        cellClear.classList.remove('X');
        cellClear.classList.remove('O');
        cellClear.classList.remove('wincol');
    }
    for (let i=0; i < 9; i++){
        value[i] = -1;
    }
};

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];
    console.log("Location = ",location);
    if (gameIsLive && classList[2] != 'X' && classList[2] != 'O'){
    if (xIsNext){
        e.target.classList.add('X');
        checkGameStatus(location);
    }
    else {
        e.target.classList.add('O');
        checkGameStatus(location);
    }
    console.log(value);

}
};

const pageTwo = (e) => {
    const one = document.querySelector('.home');
    one.classList.add('disp');
    const two = document.querySelector('.game');
    two.classList.remove('disp');
};



//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click',handleCellClick);
}

button1.addEventListener('click', pageTwo);

