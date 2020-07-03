let triangleBoard = document.getElementById("triangle");
let matchBoard = document.getElementById("match-board");
let rule = document.getElementById("myRule");
let btn = document.getElementById("myBtn");
let close = document.getElementById("close");
let playAgain = document.getElementById("play-again");

btn.onclick = () => {
    rule.style.display = "block";
}

close.onclick = () => {
    rule.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == rule) {
        rule.style.display = "none";
    }
}

const game = () => {
    let pScore = 0;

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.triangle button');

        const playOptions = ['rock', 'scissors', 'paper'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                //Board
                triangleBoard.style.display = "none";
                matchBoard.style.display = "block";

                //Player
                const yourChoice = document.getElementById(`your${option.name}`);
                yourChoice.style.display = "block";

                //House
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = playOptions[computerNumber];
                const houseChoice = document.getElementById(`h${computerChoice}`);
                houseChoice.style.display = "block";

                //Compare
                const yChoice = option.name;
                compareChoices(yChoice, computerChoice);

                playAgain.onclick = () => {
                    triangleBoard.style.display = "block";
                    matchBoard.style.display = "none";
                    yourChoice.style.display = "none";
                    houseChoice.style.display = "none";
                }

            });
        });
    };

    //Update Score
    const updateScore = () => {
        const playerScore = document.querySelector('.count p');
        playerScore.textContent = pScore;
    }

    //Compare Choices
    const compareChoices = (yChoice, computerChoice) => {

        const winner = document.getElementById("result");

        //Check for Rock
        if (yChoice == 'rock') {
            if (computerChoice == 'scissors') {
                winner.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            }
        }

        //Check for Paper
        if (yChoice == 'paper') {
            if (computerChoice == 'scissors') {
                winner.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            }
        }

        //Check for Scissors
        if (yChoice == 'scissors') {
            if (computerChoice == 'rock') {
                winner.innerHTML = 'YOU LOST';
                pScore--;
                updateScore();
                return;
            } else {
                winner.innerHTML = 'YOU WON';
                pScore++;
                updateScore();
                return;
            }
        }

        //Check for draw
        if (yChoice == computerChoice) {
            winner.innerHTML = "DRAW";
            return;
        }
    }

    playMatch();
}

game();
