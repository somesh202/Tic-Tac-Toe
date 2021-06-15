const mode = document.querySelector('.mode-selection');
const botBtn = document.querySelector('.one-btn');
const playerBtn = document.querySelector('.two-btn');
const playerChoice = document.querySelector('.player-selection');

const playerStart1 = document.querySelector('.player-selection2');
const form = document.querySelector('form');

const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const board = document.querySelector('.board');
const board2 = document.querySelector('.board-2');
const cells = [...document.querySelectorAll('.cell')];
const nameData = document.querySelector('.name');
const playerX = document.querySelector('.btnX');
const playerO = document.querySelector('.btnO');
const restartBtn = document.querySelector('.restart');
const playerturn = document.getElementById('player-turn');
const reset = document.querySelector('.reset')
let mode1 = false;
let mode2 = false;
let gameover = false;
let turnX = true;
let aiPlayer = 'O';
let humanPlayer = 'X';
let score;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

botBtn.addEventListener('click', () => {
    mode1 = true;
    mode2 = false;
    gameover = false;


    cells.forEach((cell) => {
        cell.innerHTML = `<div></div>`;
    });
    mode.style.display = "none";

    board.style.display = "block";
    restartBtn.style.display = "block";
    reset.style.display = "block";
    playerChoice.style.display = "block";
    localStorage.clear();
    document.body.style.backgroundImage = "url('Images/1*1VMO_RixrJqzY17oeHn6yg.jpeg')";

    basicAI();

});

function emptyCells() {
    return cells.filter((cell) => cell.innerText === "");
}

function isMovesLeft() {
    if (cells.innerHTML === "") {
        return true;
    }
    return false;
}







if (mode1) {
    mode2 = false;
    gameover = false;

    cells.forEach((cell) => {
        cell.innerHTML = newBoard;
    });

    board.style.display = "block";


    basicAI();


}

function basicAI() {
    cells.forEach((cell) => {
        cell.innerHTML = "<div></div>";
    });



    for (let i = 0; i < cells.length; i++) {



        cells[i].addEventListener("click", () => {
            var audio = new Audio('Audio/button-11.mp3');
            audio.play();




            if (turnX && cells[i].innerHTML === `<div></div>` && !gameover && playerChoice.style.display == "none") {
                cells[i].innerHTML = `<div class="x" id="x">X</div>`;

                turnX = !turnX;
            }


            if (!turnX && emptyCells().length > 0 && !gameover) {


                if (cells[4].innerHTML === `<div></div>`) {
                    cells[4].innerHTML = `<div class="o" id="o">O</div>`;

                }
                else if (cells[2].innerHTML == cells[4].innerHTML && cells[6].innerHTML === `<div></div>`) {
                    cells[6].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[6].innerHTML == cells[4].innerHTML && cells[2].innerHTML === `<div></div>`) {
                    cells[2].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[2].innerHTML == cells[6].innerHTML && cells[4].innerHTML === `<div></div>`) {
                    cells[4].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[1].innerHTML && cells[2].innerHTML === `<div></div>`) {
                    cells[2].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[2].innerHTML && cells[1].innerHTML === `<div></div>`) {
                    cells[1].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML === `<div></div>`) {
                    cells[0].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[3].innerHTML == cells[4].innerHTML && cells[5].innerHTML === `<div></div>`) {
                    cells[5].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[3].innerHTML == cells[5].innerHTML && cells[4].innerHTML === `<div></div>`) {
                    cells[4].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML === `<div></div>`) {
                    cells[3].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[6].innerHTML == cells[7].innerHTML && cells[8].innerHTML === `<div></div>`) {
                    cells[8].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[6].innerHTML == cells[8].innerHTML && cells[7].innerHTML === `<div></div>`) {
                    cells[7].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML === `<div></div>`) {
                    cells[6].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[1].innerHTML == cells[4].innerHTML && cells[7].innerHTML === `<div></div>`) {
                    cells[7].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[1].innerHTML == cells[7].innerHTML && cells[4].innerHTML === `<div></div>`) {
                    cells[4].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML === `<div></div>`) {
                    cells[1].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[3].innerHTML && cells[6].innerHTML === `<div></div>`) {
                    cells[6].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[6].innerHTML && cells[3].innerHTML === `<div></div>`) {
                    cells[3].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML === `<div></div>`) {
                    cells[0].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[2].innerHTML == cells[5].innerHTML && cells[8].innerHTML === `<div></div>`) {
                    cells[8].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[2].innerHTML == cells[8].innerHTML && cells[5].innerHTML === `<div></div>`) {
                    cells[5].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML === `<div></div>`) {
                    cells[2].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[4].innerHTML && cells[8].innerHTML === `<div></div>`) {
                    cells[8].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[0].innerHTML == cells[8].innerHTML && cells[4].innerHTML === `<div></div>`) {
                    cells[4].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else if (cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML === `<div></div>`) {
                    cells[0].innerHTML = `<div class="o" id="o">O</div>`;
                }
                else {
                    emptyCells()[0].innerHTML = `<div class="o" id="o">O</div>`;
                }

                turnX = !turnX;



            }



            if (Xwin()) {
                console.log("X wins");


                playerturn.style.display = "block";
                playerturn.innerHTML = `You won this round 🥳!`;
                restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                console.log(playerX);
                gameover = true;

            }

            if (Owin()) {
                playerturn.style.display = "block";
                playerturn.innerHTML = `Uh oo! Bot wins this round !`;
                restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                var audio = new Audio('Audio/mixkit-sad-game-over-trombone-471.wav');
                audio.play();
                gameover = true;
            }

            if (tie()) {
                playerturn.style.display = "block";
                playerturn.innerHTML = `Game ended in a draw 😐`;
                restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                var audio = new Audio('Audio/mixkit-sad-game-over-trombone-471.wav');
                audio.play();
                gameover = true;

            }

        });
    }

}



playerBtn.addEventListener('click', () => {
    openForm();
    mode2 = true;
    // reset.style.display = "block";
    cells.forEach((cell) => {
        cell.innerHTML = "<div></div>";
    })

    document.body.style.backgroundImage = "url('Images/1*1VMO_RixrJqzY17oeHn6yg.jpeg')";
    reset.style.display = "none";

});
function openForm() {

    mode.style.display = "none";
    nameData.style.display = "block";


}
function twoPlayers(e) {
    const names = document.createElement("div");
    names.classList.add("names");


    const title1 = document.createElement("h3");
    title1.setAttribute("id", "left-title");
    title1.classList.add("left-title");
    title1.innerHTML = "Player One:";

    const player1 = document.querySelector("#player-1").value;
    const playerOneName = document.createElement("h2");
    playerOneName.setAttribute("id", "left-name");
    playerOneName.classList.add("left-name");
    playerOneName.innerHTML = `${player1}`;

    let score1 = document.createElement("h3");
    score1.setAttribute("id", "left-score");
    score1.classList.add("left-score");
    score1.innerHTML = 0;


    const title2 = document.createElement("h4");
    title2.setAttribute("id", "right-title");
    title2.classList.add("right-title");
    title2.innerHTML = "Player Two:";

    const player2 = document.querySelector("#player-2").value;
    const playerTwoName = document.createElement("h2");
    playerTwoName.setAttribute("id", "right-name");
    playerTwoName.classList.add("right-name");
    playerTwoName.innerHTML = `${player2}`;

    let score2 = document.createElement("h3");
    score2.setAttribute("id", "right-score");
    score2.classList.add("right-score");
    score2.innerHTML = 0;

    names.appendChild(playerOneName);
    names.appendChild(title1);
    names.appendChild(score1);
    names.appendChild(playerTwoName);
    names.appendChild(title2);
    names.appendChild(score2);
    document.body.appendChild(names);
    setTimeout(() => {

        board.style.display = "block";
        playerStart1.style.display = "block";
        restartBtn.style.display = "block";
        document.querySelector("#player-turn").style.opacity = "1";
        reset.style.display = "block";
    }, 100);

    e.preventDefault();
    e.target.reset();
    closeForm();

    if (mode2) {
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                var audio = new Audio('Audio/button-11.mp3');
                audio.play();
                if (turnX && cell.innerHTML === `<div></div>` && !gameover && playerStart1.style.display === "none") {
                    cell.innerHTML = `<div id="x">X</div>`;
                    turnX = false;
                }
                else if (!turnX && cell.innerHTML === `<div></div>` && !gameover && playerStart1.style.display === "none") {
                    cell.innerHTML = `<div id="o">O</div>`;
                    turnX = true;
                } else if (playerStart1.style.display === "block") {
                    alert(`${player1}: Please choose X or O`);

                }


                if (Xwin()) {
                    console.log("X wins");
                    if (!gameover) {
                        score1.innerHTML++;
                    }
                    playerturn.style.display = "block";
                    playerturn.innerHTML = `${player1} wins this round 🥳!`;
                    restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                    console.log(playerX);
                    var audio = new Audio('Audio/preview.mp3');
                    audio.play();
                    gameover = true;

                }

                if (Owin()) {
                    if (!gameover) {
                        score2.innerHTML++;

                    }
                    playerturn.style.display = "block";
                    playerturn.innerHTML = `${player2} wins this round 🥳!`;
                    restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                    var audio = new Audio('Audio/preview.mp3');
                    audio.play();
                    gameover = true;


                }

                if (tie()) {
                    playerturn.style.display = "block";
                    playerturn.innerHTML = `Game ended in a draw 😐`;
                    restartBtn.innerHTML = `Play Again<i class="fas fa-redo" id="icon">`;
                    var audio = new Audio('Audio/mixkit-sad-game-over-trombone-471.wav');
                    audio.play();
                    gameover = true;
                }
            });
        });
    }


}

function Xwin() {
    return winConditions.some((e) => {
        return e.every((i) => {
            return cells[i].innerText === 'X';
        });


    });


}

function Owin() {
    return winConditions.some((e) => {
        return e.every((i) => {
            return cells[i].innerText === 'O';
        });
    });
}

function tie() {
    return cells.every((cell) => {
        return cell.innerText === 'X' || cell.innerText === 'O';
    });
}
function beginX() {
    turnX = true;

    if (mode1) {
        confirm("Do you like to begin first");
    }
    if (mode2) {
        confirm("Do you like to begin with X");
    }
    playerStart1.style.display = "none";
    playerChoice.style.display = "none";

}
function beginO() {
    turnX = false;

    if (mode1) {
        confirm("Do you like Bot to first");
    }
    if (mode2) {
        confirm("Do you like to begin with O");
    }

    playerStart1.style.display = "none";
    playerChoice.style.display = "none";

}
function closeForm() {
    nameData.style.display = 'none';
}

form.addEventListener('submit', twoPlayers);
restartBtn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.innerHTML = "<div></div>";
    });

    if (mode1) {
        playerChoice.style.display = "block";
        playerStart1.style.display = "none";
    }
    if (mode2) {
        playerStart1.style.display = "block";
        playerChoice.style.display = "none";
    }


    playerturn.innerHTML = "";
    gameover = false;
});

reset.addEventListener('click', () => {
    document.location.reload()
    document.body.style.backgroundImage = "url('Images/511231.jpg')";
    deleteNames();
    mode.style.display = "block";
    nameData.style.display = "none";

    playerturn.innerHTML = "";
    cells.style.display = "none";

    // localStorage.clear();
    playerStart1.style.display = "none";
    restartBtn.style.display = "none";
    playerChoice.style.display = "none";
    reset.style.display = "none"
});


function deleteNames() {
    document.querySelector('.names').remove();
}
var x = document.getElementById('myAudio')
if (gameover == true) {
    x.pause();
}