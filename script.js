const RPS = ["rock", "paper", "scissors"]; 
const winners = [];


function game(){
    for(let i = 1; i<=5; i++) {
        playRound(i);
}
    document.querySelector("button").textContent = "Play new game";
    logWins();

}

function playRound(round) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}


function computerPlay (){ 
    return RPS[Math.floor(Math.random() * RPS.length)];
}

function playerPlay() {
    let input = prompt('Type Rock, Paper or Scissors');
    while(input == null){
        input = prompt('Type Rock, Paper or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt('Type Rock, Paper or Scissors, make sure you write it in the correct way.');
        while(check == null){
            input = prompt('Type Rock, Paper or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input

}





function checkWinner(choiceOfP, choiceOfC){
    if(choiceOfC === choiceOfP) {
        return "Tie";
    } else if (
        (choiceOfP === "rock" && choiceOfC === "scissors") ||
        (choiceOfP === "paper" && choiceOfC === "rock") ||
        (choiceOfP === "scissors" && choiceOfC === "paper"))
        {
            return "Player";
        } else {
            return "Computer";
        }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerPlay, computerPlay, winner, round){
    console.log("Round:", round);
    console.log("Player Chose:", playerPlay);
    console.log("Computer Chose:", computerPlay);
    console.log(winner, "won the round");
    console.log("-----------------");
}

function validateInput(choice){
    return RPS.includes(choice);
}