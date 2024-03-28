import { verifySet } from "./verifySet.js";
import { score } from "./score.js";
import { logCard } from "./pastSetLog.js";
/*** This file uses global variables ***/

/*
Picks 3 cards from the playDeck, verifies if they are a valid set, then replaces them by calling dealThreeNew().
Updates the setLog[] and score if the set is valid
@requires playDeck to be the defined as the cards currently on the board.
@globalParam playDeck
    Array of active cards
@globalParam playerScore
    A count of the player's score
@globalParam computerScore
    A count of the computer's score
@param player
    A string of either the computer "computer" or "player" to select
@updates playerScore
    The new player score after the set selection
@updates computerScore
    The new computer score after the set selection
@invariant
    The playerScore and computerScore array are the only global variables changed. The other globals are unaltered.
*/
export function pickCards(player){
   
    //Defines array indices and sizes
    const CHECKSIZE = 3;
    const FIRST = 0;

    //checkSet will hold the 3 cards the user selects after pressing the 'Set' button
    let checkSet = [CHECKSIZE];
    let checkSetPos = FIRST;

    //For loop loading the selected cards into checkSet
    for (let i = FIRST; i < playDeck.length; i++) {
        //If the button's class is selected then it is put into checkSet
        if (document.getElementById("cardsToDisplay").children[i].className == "selected") {
            checkSet[checkSetPos] = playDeck[i];
            checkSetPos++;
        }
    }

    //Body executes if player found a set
    if(verifySet(checkSet)) {
        document.getElementById("countdown").innerHTML = "Set!";
        //Same for loop logic as above, changing the selected buttons' cards to usedInSet true for 'dealThreeNew' function
        for (let i = FIRST; i < playDeck.length; i++) {
            if (document.getElementById("cardsToDisplay").children[i].className == "selected") {
                playDeck[i].usedInSet = true;

                logCard(playDeck[i]); //Logs the cards used in a set for the "usedInSet" functionality
            }
        }

        //Adding to whatever player chose the set
        score(player, "Plus");

    } else {
        document.getElementById("countdown").innerHTML = "Not a Set!";
        score(player, "Minus");
    }

}