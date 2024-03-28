import { pickCards } from "./pickCards.js";
import { dealThreeNew } from "./dealThreeNew.js";
import { verifySetAvailable } from "./verifySetAvailable.js";
/*** This file uses global variables ***/

/* 
Uses the array of arrays that contain the valid sets for a computer to select a set after a set duration
decided by the difficulty.
@requires global variable difficulty must be either "Easy", "Medium", or "Hard"
@globalParam
    Difficulty is the difficulty for the computer
@param diff
    The user selected difficulty
@replaces
    The global variable difficulty is replaced to hold the time delay
@invariance
    Only the global variable difficulty is changed in this function. The other global variables remain unaltered.
*/
export function initComputer(diff) {
    //Defines the constant wait time in milliseconds.
    const EASY = 35000;
    const MEDIUM = 25000;
    const HARD = 15000;

    //Sets the delay of the computer before selection based on difficulty selected.
    switch (diff) {
        case "Easy":
            difficulty = EASY;
            break;
        case "Medium":
            difficulty = MEDIUM;
            break;
        case "Hard":
            difficulty = HARD;
            break;
        default:
            //If user selected no difficulty, use medium
            difficulty = MEDIUM;
    }
}

/*
Checks if the player is selecting, then calls helper function to pick the set for the computer
@requires deck to be defined as the cards remaining (not used or on the board) and
    playDeck to be the defined as the cards currently on the board.
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@updates deck
    The deck will be updated in dealThreeNew function that is called
@updates playDeck
    The playDeck will be updated in the pickCards and dealThreeNew functions that are called
@invariant
    The deck and playDeck arrays are the only global variables changed. The other globals are unaltered.
*/
export function computerSelect() {
    const COMPWAIT = 10; //Creates a delay for the computer selection to be visible to the player

    //Checks if the player is making a selection
    let setButton = document.getElementById("setButton");
    if (setButton.disabled == true) {
        setTimeout(computerSelect, COMPWAIT);
    } else {
        //Stops user from selecting buttons
        setButton.disabled = true;
        compTurn();
    }
}

/*
Selects the first valid set for the computer
@requires deck to be defined as the cards remaining (not used or on the board) and
    playDeck to be the defined as the cards currently on the board.
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@updates deck
    The deck will be updated in dealThreeNew function that is called
@updates playDeck
    The playDeck will be updated in the pickCards and dealThreeNew functions that are called
@invariant
    The deck and playDeck arrays are the only global variables changed. The other globals are unaltered.
*/
function compTurn() {

    const PICKDELAY = 3000; //Creates a delay for the computer selection to be visible to the player
    //Creates constants for the indices used in arrays to get elements
    const FIRST = 0;
    const SECOND = 1;
    const THIRD = 2;

    //Gets the 3 cards in the first set.
    let validSets = verifySetAvailable(playDeck);
    let chosenSet = validSets[FIRST];
    let cardOne = chosenSet[FIRST];
    let cardTwo = chosenSet[SECOND];
    let cardThree = chosenSet[THIRD];

    //Selects the 3 cards for the computer
    compCards(cardOne);
    compCards(cardTwo);
    compCards(cardThree);
    
    //Removes the cards and updates the playDeck with delay
    pickCards("Computer");
    
    setTimeout(dealThreeNew, PICKDELAY);
    setTimeout(function enableSet(){
        //Reenables the user to select buttons
        setButton.disabled = false;
    }, PICKDELAY);
}

/*
Selects the card in the playDeck that the computer wants to select.
@requires playDeck to be the defined as the cards currently on the board and
    the card parameter to be an element in the playDeck
@globalParam playDeck
    Array of active cards
@param
    card is the card the computer wants to select.
@updates
    The display type of the card selected.
@invariant
    All of the global variables remain unaltered in this function.
*/
function compCards(card) {
    const FIRST = 0; //Defines the first index in the playDeck array
    //Loops through the playDeck to find the card and select it
    for (let i = FIRST; i < playDeck.length; i++) {
        if (playDeck[i].fileName == card.fileName) {
            document.getElementById("cardsToDisplay").children[i].className = "selected";
        }
    }
}
