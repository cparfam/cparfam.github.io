
var computerChoice, playerChoice, choice, playerScore, computerScore;

reset();



document.querySelector("#rock").addEventListener("click", function()
{
    playerChoice = "rock";
    document.querySelector("#rock").style.background = "rgb(145, 30, 30)";
    document.querySelector("#paper").style.background = "rgb(253, 232, 232)";
    document.querySelector("#scissors").style.background = "rgb(253, 232, 232)";
});

document.querySelector("#paper").addEventListener("click", function()
{
    playerChoice = "paper";
    document.querySelector("#paper").style.background = "rgb(145, 30, 30)";
    document.querySelector("#rock").style.background = "rgb(253, 232, 232)";
    document.querySelector("#scissors").style.background = "rgb(253, 232, 232)";
});

document.querySelector("#scissors").addEventListener("click", function()
{
    playerChoice = "scissors";
    document.querySelector("#scissors").style.background = "rgb(145, 30, 30)";
    document.querySelector("#paper").style.background = "rgb(253, 232, 232)";
    document.querySelector("#rock").style.background = "rgb(253, 232, 232)";
});

document.querySelector(".start").addEventListener("click", function()
{

    random();

    var alertDOM = document.querySelector(".alert");
   
    


    if (playerChoice === "rock" && choice === "rock")
    {

        alertDOM.textContent = "It's a tie!";

    }else if (playerChoice === "rock" && choice === "paper")
    {

        alertDOM.textContent = "Computer won!";
        computerScore += 1;

    }else if (playerChoice === "rock" && choice === "scissors")
    {

        alertDOM.textContent = "Player won!";
        playerScore += 1;

    } else if (playerChoice === "scissors" && choice === "rock")
    {

        alertDOM.textContent = "Computer won!";
        computerScore += 1;

    } else if(playerChoice === "scissors" && choice === "paper")
    {

        alertDOM.textContent = "Player won!";
        playerScore += 1;

    } else if (playerChoice === "scissors" && choice === "scissors")
    {

        alertDOM.textContent = "It's a tie!"

    } else if (playerChoice === "paper" && choice === "rock")
    {

        alertDOM.textContent = "Player won!";
        playerScore += 1;

    } else if (playerChoice === "paper" && choice === "paper")
    {

        alertDOM.textContent = "It's a tie!"

    } else if (playerChoice === "paper" && choice === "scissors")
    {

        alertDOM.textContent = "Computer won!";
        computerScore += 1;

    }

    document.querySelector(".computer").src = choice + ".png";
    document.querySelector("#player-score").textContent = playerScore;
    document.querySelector("#computer-score").textContent = computerScore;


});

document.querySelector(".reset").addEventListener("click", reset);




function random()
{

    choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

}

function reset()
{
    document.querySelector("#player-score").textContent = 0;
    document.querySelector("#computer-score").textContent = 0;
    document.querySelector(".computer").src = "question mark.png";
    document.querySelector("#rock").style.background = "rgb(253, 232, 232)";
    document.querySelector("#paper").style.background = "rgb(253, 232, 232)";
    document.querySelector("#scissors").style.background = "rgb(253, 232, 232)";
    computerChoice = ["rock", "paper", "scissors"];
    playerScore = 0;
    computerScore = 0;
}






