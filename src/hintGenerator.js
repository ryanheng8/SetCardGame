import { verifySetAvailable } from "./verifySetAvailable.js";
/*** This file uses global variables ***/

/* 
Uses the array of arrays that contain the valid sets to generate a hint based on the number of clicks
@requires playDeck to be the defined as the cards currently on the board.
@globalParam playDeck
    Array of active cards
@invariant
    None of the global variables are unaltered.
*/
export function addHint() {
    //Define hint counts
    const HINTONE = 1;
    const HINTTWO = 2;
    const HINTTHREE = 3;
    const HINTFOUR = 4;
    const HINTFIVE = 5;

    //Define card indices
    const FIRST = 0;
    const SECOND = 1;
    const THIRD = 2;

    //Gets all of the valid sets
    let validSets = verifySetAvailable(playDeck);
    let chosenSet = validSets[FIRST];
    let cardOne = chosenSet[FIRST];
    let cardTwo = chosenSet[SECOND];
    let cardThird = chosenSet[THIRD];


    //Increments global variable hintCounter
    hintCounter++;
    switch (hintCounter) {
        case HINTONE:
            //Display number of sets
            let hint1 = document.getElementById("hint1");
            hint1.textContent = "There are " + validSets.length + " valid sets available";
            hint1.style.display = "block";
            break;
        case HINTTWO:
            //Display the color in a set
            let hint2 = document.getElementById("hint2");
            if (cardOne.color == cardTwo.color) {
                hint2.textContent = "A set is available with matching color: " + cardOne.color;
            } else {
                hint2.textContent = "A set is available with no matching colors";
            }
            hint2.style.display = "block";
            break;
        case HINTTHREE:
            //Display the symbol in a set
            let hint3 = document.getElementById("hint3");
            if (cardOne.symbol == cardTwo.symbol) {
                hint3.textContent = "A set is available with matching symbol: " + cardOne.symbol;
            } else {
                hint3.textContent = "A set is available with no matching symbols";
            }
            hint3.style.display = "block";
            break;
        case HINTFOUR:
            //Display the shading in a set
            let hint4 = document.getElementById("hint4");
            if (cardOne.shading == cardTwo.shading) {
                hint4.textContent = "A set is available with matching shading: " + cardOne.shading;
            } else {
                hint4.textContent = "A set is available with no matching shadings";
            }
            hint4.style.display = "block";
            break;
        case HINTFIVE:
            //Display the number in a set
            let hint5 = document.getElementById("hint5");
            if (cardOne.numberSymbols == cardTwo.numberSymbols) {
                hint5.textContent = "A set is available with matching number: " + cardOne.numberSymbols;
            } else {
                hint5.textContent = "A set is available with no matching number";
            }
            hint5.style.display = "block";
            break;
        default:
            //Updates hint button to say no more hints
            let anotherHintButton = document.getElementById("moreHint");
            if(anotherHintButton){ //checking to see if element is not null
                anotherHintButton.innerHTML = "No More Hints!";
            }
    }
}

/* 
Initializes all of the buttons for the hints.
@requires playDeck to be the defined as the cards currently on the board.
@globalParam playDeck
    Array of active cards
@invariant
    None of the global variables are unaltered.
*/
export function initHints() {
    //Creates a listener for clicking the hint button to open the forum
    let hintButton = document.getElementById("hintButton");
    if(hintButton){ //checking to see if element is not null
        hintButton.addEventListener("click", function openHintForm() {
            document.getElementById("hintPopup").style.display = "block";
        });
    }

    //Creates a listener for clicking the close hint button to close hint forum
    let closeHintButton = document.getElementById("closeHint");
    if(closeHintButton){ //checking to see if element is not null
        closeHintButton.addEventListener("click", function closeHintForm() {
            document.getElementById("hintPopup").style.display = "none";
        });
    }

    //Creates a listener for clicking the close hint button to close hint forum
    let anotherHintButton = document.getElementById("moreHint");
    if(anotherHintButton){ //checking to see if element is not null
         anotherHintButton.addEventListener("click", addHint);
    }    
}

/* 
Resets all of the hints in the hint pop up for the next cycle of hints
@globalParam hintCounter
    Count of the number of times the hint button is pressed
@invariance
    The hintCounter is the only global variable changed. The other global variables are unaltered.
*/
export function resetHints() {
    //Defines initial value
    const INITIALVALUE = 0;
    const FIRSTHINT = 1;
    const NUMHINTS = 5;

    //Resets the hint counter global variable
    hintCounter = INITIALVALUE;
    for (let i = FIRSTHINT; i <= NUMHINTS; i++) {
        //Resets all hints
        let hint = document.getElementById("hint" + i);
        if(hint){ //checking to see if element is not null
            hint.style.display = "none";
        }
    }    

    //Resets hint button
    let anotherHintButton = document.getElementById("moreHint");
    if(anotherHintButton){ //checking to see if element is not null
        anotherHintButton.innerHTML = "Get Hints!";
    }
}