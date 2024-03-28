import { verifySet } from './verifySet.js'

/* 
Checks if there is a valid set available.
@requires playDeck to be the defined as the cards currently on the board
@Param checkDeck
    The array deck to be verified
@invariance
    The parameters are not changed in this function
@returns an array of arrays containing valid sets, empty otherwise
*/
export function verifySetAvailable(checkDeck) {
    //Define array indices
    const FIRST = 0;
    const SECOND = 1;
    const THIRD = 2;

    //Initializes an empty array to store valid sets.
    let valid = [];

    /*
    Loops through each combination of cards. Since each card must be unique,
    1 is added to each index to offset them, and -2 and -1 is used to prevent out of bounds indexing.
    */
    for (let i = FIRST; i < checkDeck.length - THIRD; i++) {
        for (let j = i + SECOND; j < checkDeck.length - SECOND; j++) {
            for (let k = j + SECOND; k < checkDeck.length; k++) {
                //Creates an array check is the selected cards are valid.
                let set = [checkDeck[i], checkDeck[j], checkDeck[k]];
                if (verifySet(set)) {
                    //If valid, add to the array of valid sets.
                    valid.push(set);
                }
            }
        }
    }
    //returns the set of valid sets
    return valid;
}

