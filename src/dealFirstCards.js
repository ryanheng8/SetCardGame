import { verifySetAvailable } from "./verifySetAvailable.js";
import { shuffleDeck } from "./deck.js";
import { refreshCards } from "./refreshCards.js"
/*** This file uses global variables ***/

/*
Deals the initial 12 cards out into board, and represents board as array
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@updates deck
    The deck will be updated in removing the cards moved to playDeck
@updates playDeck
    The playDeck will be updated to include the 12 cards from the deck
@invariant
    The deck and playDeck are the only global variables changed. The other globals are unaltered.
*/
export function dealFirstCards(){
    //Defines constants for the array indices and size
    const FIRST = 0;
    const NUMCARDS = 12;
    const EMPTY = 0;
    //Deals the cards
    for (let i = FIRST; i < NUMCARDS; i++) {
        playDeck.push(deck.pop());
    }
    //Checks if there is a set, if not then refresh the cards
    if (verifySetAvailable(playDeck).length == EMPTY) {
        refreshCards();
    }
}