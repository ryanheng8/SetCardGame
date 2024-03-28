/*
Adds a recent found set by either the player or computer to a history log of past sets, pastSetLog
@param card
    The card to be added to the log
@updates
    The html page to reflect the added card to the log
*/
export function logCard(card){
    //Creates the new element for the card
    let img = document.createElement("img");
    img.src = "Card_Images/" + card.fileName + ".PNG";

    document.getElementById("pastSetCards").appendChild(img);
}