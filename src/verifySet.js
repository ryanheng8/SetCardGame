/* 
Checks if the cards are a valid set.
@requires checkSet to be an array of 3 cards
@param
    checkSet is an array of 3 card objects.
@returns true if the checkSet is valid, false otherwise.
*/
export function verifySet(checkSet) {
    //Defines array indices
    const FIRST = 0;
    const SECOND = 1;
    const THIRD = 2;

    //Verifies each attribute
    let color = verifyAttribute(checkSet[FIRST].color, checkSet[SECOND].color, checkSet[THIRD].color);
    let symbol = verifyAttribute(checkSet[FIRST].symbol, checkSet[SECOND].symbol, checkSet[THIRD].symbol);
    let numberSymbols = verifyAttribute(checkSet[FIRST].numberSymbols, checkSet[SECOND].numberSymbols, checkSet[THIRD].numberSymbols);
    let shading = verifyAttribute(checkSet[FIRST].shading, checkSet[SECOND].shading, checkSet[THIRD].shading);

    //Returns true if all attributes are satisfied, false otherwise.
    return (color && symbol && numberSymbols && shading);

}

/* 
Checks if the attributes of 3 cards could form a valid set.
@requires
    all of the attributes to be the same type of 3 different cards.
@param attr1
    attribute of the first card
@param attr2
    attribute of the second card
@param attr3
    attribute of the third card
@returns true if the attributes are valid, false otherwise.
*/
function verifyAttribute(attr1, attr2, attr3) {
    //Checks if the attributes are all the same or all different.
    return ((attr1 == attr2) && (attr2 == attr3)) || ((attr1 != attr2) && (attr2 != attr3) && (attr1 != attr3));    
}