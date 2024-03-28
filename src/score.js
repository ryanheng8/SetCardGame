import { computerSelect } from "./computer.js";
import { resetHints } from "./hintGenerator.js";
/*** This file uses global variables ***/

/*
Adds or substracts score of either player or computer if called
@globalParam playerScore
    A count of the player's score
@globalParam computerScore
    A count of the computer's score
@globalParam computerMode
    True is the computer is active and false otherwise
@globalParam difficulty
    The delay of the computer selection
@param player 
    String that respresents whether the player or computer scored
@param condition
    A string that is either "Plus" or "Minus". Used to increase or decrease @param player score
@updates playerScore
    The new player score after the set selection
@updates computerScore
    The new computer score after the set selection
@invariant
    The playerScore and computerScore are the only global variables changed. The other globals are unaltered.
*/
export function score(player, condition){
    //Define reset delay
    const RESETDELAY = 3000;

    if (player == "Player") {
        if (condition == "Plus"){
            playerScore++;
        } else {
            playerScore--; 
        }
        //Update player score in html
        document.getElementById("playerScoreId").innerHTML = "Your Score: " + playerScore;
    } else if (player == "Computer") {
        if (condition == "Plus"){
            computerScore++;
        } else {
            computerScore--; 
        }
        //Updates computer score in html
        document.getElementById("computerScoreId").innerHTML = "CPU Score: " + computerScore;
    }
    //If a valid set is selected, call computer again and reset hints
    if (condition == "Plus") {
        //Calls the computer for the updated deck
        if (computerMode == "true") {
            setTimeout(computerSelect, difficulty);
        }
        setTimeout(resetHints, RESETDELAY);
    }
}