import { createDeck } from "./deck.js";
import { dealFirstCards } from "./dealFirstCards.js";
import { displayCards } from "./cardSelectLogic.js";
import { setButtonOnClick } from "./cardSelectLogic.js";
import { initHints } from "./hintGenerator.js";
import { initComputer , computerSelect } from "./computer.js";
/*** This file uses global variables ***/

/*
This function contains all of the buttons and runs the functions for the game logic.
*/
function gamescreen(){

    //deck is initially set to all 81 shuffled cards 
    createDeck();

    //Setting the cards onto the board, playDeck will probably end up being the board representation throughout whole game
    dealFirstCards();

    //Displays first 12 cards
    displayCards();
 
    //Inits our setButton with an onClick action
    //Main game loop - Game "starts" with setButtonOnClick
    //PickCards and dealThreeNew is called in setButtonOnClick
    document.getElementById("setButton").addEventListener("click",(_e) => { setButtonOnClick() });

    //Displays player score and gets computer data to initialize computer or not
    document.getElementById("playerScoreId").innerHTML = "Your Score: 0";
    computerMode = sessionStorage.getItem("Computer");
    //Display Computer Score if in computer mode and intialize it
    if (computerMode == "true") {
        document.getElementById("computerScoreId").style.display = "block";
        document.getElementById("computerScoreId").innerHTML = "CPU Score: 0";
        initComputer(sessionStorage.getItem("Difficulty"));
        setTimeout(computerSelect, difficulty);
    } else {
        document.getElementById("computerScoreId").style.display = "none";
    }
    //Initializes hints
    initHints();

    //Creates a listener for clicking quit to open the end screen.
    let quitButton = document.getElementById("quitButton");
    if(quitButton){ //checking to see if element is not null
        quitButton.addEventListener("click", function openEndScreen() {
            sessionStorage.setItem("PScore", playerScore);
            sessionStorage.setItem("CScore", computerScore);
            window.location.href= "endScreen.html";
        });
    }
}
gamescreen();