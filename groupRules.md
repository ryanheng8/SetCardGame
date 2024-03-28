
# Group Rules

## ***Game Rules***

The goal of the game is to call a "Set" of 3 cards from 12 cards laid out on the table. The deck is made up of 81 unique cards with a variation of these four features:  
1. Color - Red, Green or Purple
2. Symbol - Oval, Squiggle or Diamond
3. Number - One, Two or Three
4. Shading - Solid, Open or Striped

A "Set" consists of 3 cards in which each feature is either the same on each car or is different on each card. Any feature in the "Set: is either common to all 3 or different on each card.  

### ***Example Sets***

1. ALL 3 cards are red, ovals, two symbols and all have different shadings.
2. All 3 cards have difference colors, symbols and numbers and all 3 have the same shading.
3. All 3 cards have different colors, symbols, numbers and shadings.

### ***Non Set Examples***

1. All 3 cards have different colors, shapes and numbers, and 2 are open one is not.
2. All 3 cards are squiggles, have different shadings and numbers, however two are red and one is not.

### ***"Magic Rule"***

If two are... and one is not, then it is *not* a set.

### ***How to Play***

- The deck is shuffled and 12 cards are layed out face up on the screen to be seen by all. 
- Players can remove a "Set" of 3 cards as they are seen. Each "Set" is checked by the game. If correct, the "Set" is kept by the player, their score increases and the 3 cards are replaced from the deck, if they are incorrect, they will lose a point.
- Players do not take turns, but instead pick them up as soon as they are seen. To aquire a set, a player must "call" set by clicking the set button before selecting the cards. If the set has not been "called" no cards may be selected.
- After "calling" set the player has 10 seconds to select a set, otherwise the player will lose a point and the 3 cards will be returned to the table. 
- If more than 3 cards are selected the player's set will be reset and the player will recieve a warning.
- The hint button may be pressed at any time in the game, for a maximum of 5 hints.
- It is possible to recieve negative points if more wrong sets were chosen then correct sets.
- If there are no sets within the 12 dealt cards, the deck will be reshuffled and 12 new cards will be dealt. 
- The game continues on until there are no sets left in the entire deck.
- The game may be ended automatically (when no sets are available in the entire deck) or by clicking the "Quit" button.

#### Additional CPU Rules

- If no difficulty level is set, the CPU will automatically play under medium difficulty
- If the CPU calls a set, a player may not call set until the new cards are dealt
- The player with the highest score at the end wins.
___

## ***Group Goals***

### ***Documentation***

1. Readme is very thorough, with samples of how to play
2. Installation instructions anticipate possible problems, with solutions
3. ***In-code documentation is complete (e.g. mathematical models for abstractions)***
4. Writing is compelling and crisp
5. ***Commit messages are substantial and include first-line summary and body***

### ***Correctness***

1. Fully correct and very robust, even to malicious user actions

### ***Functionality/Features***

1. Particularly engaging game with ***several*** extra features
2. Many people will want to play this game in their spare time

### ***CSS and Code Style***

1. Strict adherence to a known style
2. Style rules are carefully documented, localized, expanded, annotated
3. Excellent use of standard libraries and idiomatic Javascript
4. Elegant use of language elements

### ***Design***

1. Beautiful classes with clean APIs
2. Clear separation of abstraction and concrete representation
3. Trivially generalizable along multiple dimensions of functionality
___

## ***Syle Rules***

### ***JavaScript***

1. Camelcase for files and methods, variables, etc.
2. Each function will get its own folder, unless you need to use simple helper functions (i.e. -> having a function with an isInteger function in the same folder is OK. Having an abstract representation of a Card and a Deck in the same folder is not okay.)
3. Semicolons will be used at the end of each line.
4. Each html page that differs greatly from the rest will recieve it's own Javascript file to handle events. 
5. Indentation will be done with tabs. 
6. Each function should include a comment describing the function.
7. Spread code across lines rather than condensing it onto one line. 


### ***CSS***

1. One CSS file will be used for all html pages.
2. The CSS file will be organized from least specific to most specific.
3. !important should not be used.
4. Comments should be added to code that is not self-documenting... anything ambiguous or not of standard practice.
5. Double quotes should be used around values
6. Rules will be added using the longhand method to avoid confusion
7. Avoid ID selectors unless absolutley required.
8. List multiple selectors on seperate lines rather than across one line.
9. Include spaces after function parameters.
10. Stick to expanded syntax style and spread each declaration out on its own line.
11. When turning off properties use "0" rather than "none"

### ***HTML***

1. JavaScript code will be embedded as a link at the end of the html page.
2. Each HTML page will have a well fitting file name in regards to its purpose. 
