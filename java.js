let user_score = 0;
let computer_score = 0;
const user_score_span = document.getElementById("user_score");
const computer_score_span = document.getElementById("computer_score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");

function ConvertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(User, Computer) {
    user_score++;
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = computer_score;
    result_p.innerHTML = ConvertToWord(User) + " Beats " + ConvertToWord(Computer) + " You win!"

}
function lose(User, Computer) {
    computer_score++;
    computer_score.innerHTML = computer_score;
    user_score_span.innerHTML = user_score;
    result_p.innerHTML = ConvertToWord(User) + " Loses to " + ConvertToWord(Computer) + " You lose!"
}
function tie(User, Computer) {
    result_p.innerHTML = "DRAWWWW"
}



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(user_choice) {
    const computerChoice = getComputerChoice();
    switch(user_choice + computerChoice) {
     case  ("rs"):
     case  ("sp"):
     case  ("pr"):
     win(user_choice,computerChoice)
     break;
     case ("sr"):
     case ("ps"):
     case ("rp"):
     lose(user_choice,computerChoice)
     break;
     case ("rr"):
     case ("ss"):
     case ("pp"):
     tie(user_choice,computerChoice)
     break;
    }

}



function main() {
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();
 

 

