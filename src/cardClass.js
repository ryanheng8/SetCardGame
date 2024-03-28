/*
Abstract representation of a card from the game Set
Intiliatises class variables to arguments
    @requires each card to have all of these values
    @ensures 
        this.fileName = file name for specific instance of a card rep
    end
    @param color
        is the color for the card {red, green, purple}
    @param symbol
        is the symbol for the card {tilde, rhombus, oval}
    @param numberSymbols
        is the number of symbols on the card {1, 2, 3}
    @param shading
        is the shading of the card {empty, dashed, filled}
*/
export default class Card  {
    //Constructor for each card.
    constructor(color,symbol,numberSymbols,shading){
        this.usedInSet = false;
        this.fileName = color + "_" + symbol + "_" + shading + "_" + numberSymbols;
        this.color = color;
        this.symbol = symbol;
        this.numberSymbols = numberSymbols;
        this.shading = shading;
    }
}