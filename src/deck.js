import Card from "./cardClass.js";
/*** This file uses global variables ***/

/*
Initilizes the array of cards to represent a deck
@globalParam deck
    Array of all cards to be played
@updates 
    deck of len = 81 card type objects with each unique card
@invariant
    The deck is the only global variable changed. The other globals are unaltered.
*/
export function createDeck(){
    //Defines card attributes
    const COLORS = ["red", "green", "purple"];
    const SYMBOLS = ["oval", "tilde", "rhombus"];
    const NUMBERS = ["1", "2", "3"];
    const SHADINGS = ["filled", "empty", "dashed"]; 

    //Creates a unique card with each attribute
    for(let color in COLORS){
        for(let symbol in SYMBOLS){
            for(let number in NUMBERS){
                for(let shading in SHADINGS){
                    let card = new Card(COLORS[color], SYMBOLS[symbol], NUMBERS[number], SHADINGS[shading])
                    deck.push(card);
                }
            }
        }
    }
    //Shuffles the created deck
    shuffleDeck(deck.length-1);
}

/*
Simple deck shuffler method

Shuffles by doing
swap(deck[random index], deck[i--])
@globalParam deck
    Array of all cards to be played
@Param size
    Size of the deck to shuffle
@updates 
    The permutation of the cards to be in a random order
@invariant
    The deck is the only global variable changed. The other globals are unaltered.
*/
export function shuffleDeck(size){
    //Defines array indices
    let LAST = size;
    const FIRST = 0;

    for(let i = LAST; i > FIRST; i--){
        //Gets random index for a card
        let rndIdx = Math.floor(Math.random() * i);
        let tmp = deck[i];
        //Swaps that card into the position
        deck[i] = deck[rndIdx];
        deck[rndIdx] = tmp;

    }
}
