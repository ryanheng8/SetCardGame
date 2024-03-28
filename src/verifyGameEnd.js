import { verifySetAvailable } from "./verifySetAvailable.js";
/* 
Checks if the game is over by checking the deck and dealt cards for sets.
@requires deck and playDeck to be an array of cards that is a multiple of 3.
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@returns true if the game is over, false otherwise.
*/
export function verifyGameEnd() {
    //Defines array size
    const EMPTY = 0;

    //allCards is an array of every single card (deck + playDeck)
    let allCards = deck.concat(playDeck);

    //Initializes return value to false.
    let gameOver = false;
    //Checks if there are still cards in the deck and if there are any sets left on the baord.
    if (verifySetAvailable(allCards).length == EMPTY) {
        gameOver = true;
    }
    return gameOver;
}