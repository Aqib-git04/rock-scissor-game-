
let userScore = 0;     //initial user value
let computerScore = 0; //initial computer value


// user choice funtion
const choices = document.querySelectorAll(".choice");
// msg para which shows result in browser
const msg = document.querySelector("#msg");
//scrore increment for user
const userScorepara = document.querySelector("#user-score");
//scrore increment for computer
const comScorepara = document.querySelector("#comp-score");





choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});


// computer choice funtion
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//funtion for checking draw condition
const drawGame = () => {

    msg.innerText = "Game was draw..Play Again! !";
    msg.style.backgroundColor = "yellow";

}


const playGame = (userChoice) => {

    const comChoice = genComChoice();

    if (userChoice === comChoice) {
        //draw condition
        drawGame();
    }
    else {
        let userWin = true
        if (userChoice === "rock") {
            //scissors or paper
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper")
        //rock,scissor
        {
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);

    }

}
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {

        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";



    } else {

        computerScore++;
        comScorepara.innerText = computerScore
        msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`;

        msg.style.backgroundColor = "red";

    }
};



