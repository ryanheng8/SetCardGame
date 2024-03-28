import { dealThreeNew } from "./dealThreeNew.js";
import { pickCards } from "./pickCards.js";
import { score } from "./score.js";
import { verifySetAvailable } from "./verifySetAvailable.js";
/*** This file uses global variables ***/

/*
This function is responible for keeping track
of buttons and images, displays the card as 
    <button class = selected or unselected id = cardImg + i>
    <img></img>
    </button>
@requires playDeck to be a global variable that contains the current array of dealt cards.
@globalParam playDeck
    Array of active cards
@invariance
    None of the global variables are changed in this function.
*/
export function displayCards(){
    const FIRST = 0; //Defines the first index in the playDeck array
    //Loop through all of the cards that are dealt
    for(let i = FIRST; i < playDeck.length; i++){   

        let img = document.createElement("img");    //dynamically adding elements to the div
        let button = initButton();

        let cardID = "cardImg" + i; //each cardImg is a unique identifier, the +i is to properly nest the images inside of the button elements
            
        button.id = cardID;
        img.src = "Card_Images/" + playDeck[i].fileName + ".PNG"; //using card.fileName and appending the rest of image rel path as source

        if(document.getElementById(cardID)){    //if function has already been called before, delete the previous call's cardImgs and buttons.
            document.getElementById(cardID).remove();
        }

        document.getElementById("cardsToDisplay").appendChild(button); //adding the buttons to cardsToDisplay div
        document.getElementById(cardID).appendChild(img); //adding the image sources to the buttons themselves
    }
}

/*
Helper method to init. button element 
@requires the global parameter numClick to exist
@globalParam numClick
    Global variable to track the number of cards clicked
@updates
    The global variable numClick to reflect the number of cards selected
@invariance
    Only the global variable numClick is changed in this function. The other global variables are unaltered.
@returns a button element with an onclick action event listener
*/
function initButton(){
    let button = document.createElement("button"); //Creates button element

    button.className = "unselected"; //Defining initial state of buttons to have unselected class name
    button.disabled = true; //Disabling button functionality, will be enabled when user hits the set button
    
    button.onclick = function(){

        if(button.className == "unselected"){ //Two cases: eiether the card has been selected, or not selected, represented by its className.
            //Update global variable of clicks
            numClick++;
            button.className = "selected";
        }else if(button.className == "selected"){
            //Update global variable of clicks
            numClick--;
            button.className = "unselected";
        }
    }
    return button;
}


/*
Method to define the onclick behavior of "setButton"
Starts a countdown timer, from 10, whenver setButton is clicked
@requires deck to be defined as the cards remaining (not used or on the board) and
    playDeck to be the defined as the cards currently on the board.
@globalParam deck
    Array of all cards to be played
@globalParam playDeck
    Array of active cards
@globalParam time
    Time remaining for the player to select cards
@globalParam playerScore
    A count of the player's score
@globalParam computerScore
    A count of the computer's score
@globalParam numClick
    The number of cards selected
@updates deck
    The deck will be updated in dealThreeNew function that is called
@updates playDeck
    The playDeck will be updated in the pickCards and dealThreeNew functions that are called
@updates time
    The time countdown will be displayed and reset
@updates playerScore
    The new player score after the set selection
@updates computerScore
    The new computer score after the set selection
@updates numClick
    The live count of the clicks then is reset
@invariant
    All global variables are altered EXCEPT hintCounter, computerMode, and difficulty
*/
export function setButtonOnClick(){
    //Define starting time for the player to select cards and clicks
    const STARTTIME = 10;
    const THIRDCLICK = 3;
    const DELAY = 1000;
    const INITVALUE = 0;
    const NOTIME = 0;

    time = STARTTIME;
    setButton.disabled = true; //Disabling once button is clicked once, allowing only one click per 10 second interval

    let timerButton = setInterval(function(){
        //If user selects 3 cards before timer runs out
        if(numClick == THIRDCLICK){

            pickCards("Player");
            dealThreeNew();

            clearInterval(timerButton);
            disableButtons();
            setButton.disabled = false; //Enabling button once 10 seconds is up
            numClick = INITVALUE; //Reseting numClicks for next round

        }else if (time <= NOTIME) { //When time runs out

            //Decreases player score
            score("Player", "Minus");
                
            clearInterval(timerButton);
            disableButtons();
            //"Not a Set!" can be changed to w/e
            document.getElementById("countdown").innerHTML = "Not a Set!";
            setButton.disabled = false; //Enabling button once 10 seconds is up
            numClick = INITVALUE; //Reseting numClicks for next round

        }else{ //While timer is running
            enableButtons();
            //If the user selected more than 3 cards, resets cards and alert the user
            if (numClick > THIRDCLICK) {
                disableButtons();
                numClick = INITVALUE;
                document.getElementById("countdown").innerHTML = "Only Pick 3!";
            } else {
                document.getElementById("countdown").innerHTML = time + " seconds left";
            }
        }
        time--;
    
    }, DELAY);

}


//Helper method to enable all child buttons of element "cardsToDisplay"
function enableButtons(){
    const FIRST = 0; //Defines the first index in the playDeck array
    for(let i = FIRST; i < document.getElementById("cardsToDisplay").children.length; i++){
        document.getElementById("cardsToDisplay").children[i].disabled = false;
    }
}

//Helper method to disable all child buttons of element "cardsToDisplay"
//Also reinits button's className to its default -> className = "unselected"
function disableButtons(){
    const FIRST = 0; //Defines the first index in the playDeck array
    for(let i = FIRST; i < document.getElementById("cardsToDisplay").children.length; i++){
        document.getElementById("cardsToDisplay").children[i].disabled = true;
        //Reseting their state so previous rounds don't interfere with the next round's buttons
        document.getElementById("cardsToDisplay").children[i].className = "unselected";
    }
}