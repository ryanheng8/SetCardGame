/* 
Creates the button for the endscreen using event listeners along with getting elements by id.
*/
function endscreen() {

    //Display player's final score
    let playerScore = sessionStorage.getItem("PScore");
    document.getElementById("playerFinalScoreId").innerHTML = "Your Final Score: " + playerScore;

    //Display computer's final score--when in computer mode
    computerMode = sessionStorage.getItem("Computer");
    if (computerMode == "true") {
        let computerScore = sessionStorage.getItem("CScore");
        document.getElementById("computerFinalScoreId").innerHTML = "Computer Final Score: " + computerScore;
    }

    //Creates a listener for clicking play again to open the game screen.
    let playAgainButton = document.getElementById("playAgainId");
    if(playAgainButton){ //checking to see if element is not null
        playAgainButton.addEventListener("click", function openGameScreen() {
            window.location.href= "gameScreen.html";
        })
    }

    //Creates a listener for clicking play again to open the home screen.
    let homeScreenButton = document.getElementById("homeButtonId");
    if(homeScreenButton){ //checking to see if element is not null
        homeScreenButton.addEventListener("click", function openHomeScreen() {
            window.location.href= "homeScreen.html"
        })
    }
}
endscreen();