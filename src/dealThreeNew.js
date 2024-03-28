import { displayCards } from "./cardSelectLogic.js";
import { refreshCards } from "./refreshCards.js";
import { shuffleDeck } from "./deck.js";
import { verifySetAvailable } from "./verifySetAvailable.js";
import { verifyGameEnd } from "./verifyGameEnd.js";

/*** This file uses global variables ***/

/*
Deals 3 new cards when player or computer gets a set and updates the computer and hint generator
@requires deck to be defined as the cards remaining (not used or on the board),
    playDeck to be the defined as the cards currently on the board, and
    difficulty to be the time of delay in milliseconds
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@updates deck
    The deck will be updated in removing the cards moved to playDeck
@updates playDeck
    The playDeck will be updated to include the new cards from the deck
@invariant
    The deck and playDeck are the only global variables changed. The other globals are unaltered.
*/
export function dealThreeNew(){
    //Defines constants for the array indices
    const FIRST = 0;
    const SECOND = 1;
    const THIRD = 2;
    const EMPTY = 0;
    //spliceArr holds the positions of  elements to remove from playDeck
    let spliceArr = []

    for (let i = FIRST; i < playDeck.length; i++) {
        //If playDeck[i].usedInSet == true that means that card has been "removed" from the deck
        if (playDeck[i].usedInSet == true) {

            //If the deck has a card in it then it is put in playDeck
            if (deck.length > EMPTY) {

                playDeck[i] = deck.pop();
            
            } else { //If the deck has no cards then cards will be taken out of playDeck
                //Adding the position of the usedInSet card to spliceArr
                spliceArr[spliceArr.length] = i;

            }
        }
    }

    //If there are cards to be taken out of playDeck
    if (spliceArr.length > EMPTY) {
        //While loop that takes out all buttons. The buttons will be recreated later with displayCards
        //This is to prevent a bug where duplicate card buttons would appear
        while (document.getElementById("cardsToDisplay").hasChildNodes()){
            document.getElementById("cardsToDisplay").removeChild(document.getElementById("cardsToDisplay").firstChild);
        }
        //Removing playDeck cards 
        //The order of the cards being spliced out is important
        playDeck.splice(spliceArr[THIRD],SECOND);
        playDeck.splice(spliceArr[SECOND],SECOND);
        playDeck.splice(spliceArr[FIRST],SECOND);
    }

    //If out of all the cards (playDeck+deck) there is no sets, the game ends
    if (verifyGameEnd()) {
        //Goes to end screen
        sessionStorage.setItem("PScore", playerScore);
        sessionStorage.setItem("CScore", computerScore);
        window.location.href= "endScreen.html";

    } else {
        //While loop that keeps reshuffling the deck untill playDeck has a set
        while (verifySetAvailable(playDeck).length == EMPTY) {
            //Turning deck into all of the cards so all the cards are shuffled
            deck = deck.concat(playDeck);
            //Setting playDeck to empty because refreshCards is going to be called
            playDeck = [];
    
            shuffleDeck(deck.length-1);
            refreshCards();

        }
    }
  
    //Redisplays the cards to create new buttons and to reimage the new cards
    displayCards();

}