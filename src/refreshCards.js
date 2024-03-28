import { verifySetAvailable } from "./verifySetAvailable.js";
import { shuffleDeck } from "./deck.js";
/*** This file uses global variables ***/

/*
Refreshs the playDeck cards/Array
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
export function refreshCards(){
    //Defines constants for the array indices and size
    const FIRST = 0;
    const NUMCARDS = 12;
    const EMPTY = 0;
    const OFFSET = 1;

    //Adding the playDeck cards back into deck
    //This will only change deck and playDeck if dealFirstCards calls this function
    deck = deck.concat(playDeck);
    playDeck = [];

    //Shuffling the deck
    shuffleDeck(deck.length-OFFSET);

    //Puts cards from deck into the playDeck
    //If deck has at least 12 cards it deals 12 cards
    if (deck.length >= NUMCARDS) {

        for (let i = FIRST; i < NUMCARDS; i++) {
            playDeck.push(deck.pop());
        }

    }else { //If deck has less than 12 cards deals the amount of cards in deck

        for (let i = FIRST; i < deck.length; i++) {
            playDeck.push(deck.pop());
        }
    }

    //If there is no set available all the cards are shuffled and dealFristCards will recurse until playDeck has an available set
    if(verifySetAvailable(playDeck).length == EMPTY) {
        //The deck shuffling is what will stop recursion
        refreshCards();
    }

    //Deleting all the buttons, buttons will come back in displayCards
    while (document.getElementById("cardsToDisplay").hasChildNodes()){
        document.getElementById("cardsToDisplay").removeChild(document.getElementById("cardsToDisplay").firstChild);
    }
}