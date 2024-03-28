
# Game of Set

Set is a real time card game in which players compete to find the most "sets" from an 81 deck of unique cards. There are many variations on the game, two of which can be played within the web game. 

With this application you can play a solitaire version in which you can call sets at your own pace and improve your skills, or with a CPU. The CPU player comes with 3 difficulty levels: easy, medium, and hard; to challenge players of all skill sets. 

Other features that can be found within this game, are helpful hint suggestions and a log of your previous set choices that were valid sets. 

___

## Install and Run Game

### Dependencies

- Visual Studio Code
    - To install Visual Studio Code visit: https://code.visualstudio.com/download
    - To find more information regarding setup for your operating system visit: https://code.visualstudio.com/docs/setup/setup-overview
- Live Server (VS Code Extension)
    - To find more information about Live Server and how to install/ use it visit: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - Another option to install Live Server is to navigate to "Extensions" on your Visual Studio Code window and search "Live Server". This will open a page with more information about Live Server and give you an option to install it within your Visual Studio Code application.

### Installation

1. Download the zip file containing all source code within this repository. This can be done by clicking on the green "Code" button on the main repository page and selecting "Download ZIP" from the dropdown. 
2. Navigate to the zip file (often can be found within your downloads folder or at the bottom of your browser window) and unzip the file. Below is  ways in which you can unzip the file on various Operating Systems.
    - ***Mac***
        - Double click on the .zip file, the unzipped item will appear in the same location as the .zip file.
    - ***Windows***
        - Right click on the .zip file and select "Extract All", then follow the instructions.
    - ***Linux***
        - Using a GUI
            - Right click on the .zip file and select "Extract Here", the file will be placed in the working directory.
        - Using the command line
            - ***Requires Installation of the unzip command***
                - To install unzip type "sudo apt-get install unzip" into the terminal.
            - Navigate to the directory in which the .zip file is located. Type "unzip {name}.zip" (in which {name} is replaced with the name of the .zip file) into the terminal and hit enter. The unzipped file should then be in the working directory.
3. Open your game folder within Visual Studio Code. The best way to do this is by opening VS Code, then click "Open..." under the header labeled "Start". This will open a file manager with which you can navigate to the game folder. Once found, select the entire folder and click "Open" at the bottom of the file manager. This will open the folder within your VS Code window.
4. Open the Explorer on the top left side of the window, this will display the contents of the folder.
5. Within the main folder are the .html pages. To play the game right click the "homeScreen.html" file and select "Open with Live Server". This will open the game in your default browser and bring it to the front of your screen. 
6. Enjoy the game!

___

## How to Play

### Game Rules

The goal of the game is to call a "Set" of 3 cards from 12 cards laid out on the table. The deck is made up of 81 unique cards with a variation of these four features:  
1. Color - Red, Green or Purple
2. Symbol - Oval, Squiggle or Diamond
3. Number - One, Two or Three
4. Shading - Solid, Open or Striped

A "Set" consists of 3 cards in which each feature is either the same on each car or is different on each card. Any feature in the "Set: is either common to all 3 or different on each card.  

#### Example Sets

1. ALL 3 cards are red, ovals, two symbols and all have different shadings. <br>
![red, oval, two, empty](/Card_Images/red_oval_empty_2.PNG)
![red, oval, two, dashed](/Card_Images/red_oval_dashed_2.PNG)
![red, oval, two, filled](/Card_Images/red_oval_filled_2.PNG)
2. All 3 cards have difference colors, symbols and numbers and all 3 have the same shading.<br>
![red, oval, two, empty](/Card_Images/red_oval_empty_2.PNG)
![purple, rhombus, three, empty](/Card_Images/purple_rhombus_empty_3.PNG)
![green, tilde, one, empty](/Card_Images/green_tilde_empty_1.PNG)
3. All 3 cards have different colors, symbols, numbers and shadings.<br>
![purple, oval, one, empty](/Card_Images/purple_oval_empty_1.PNG)
![green, tilde, two, dashed](/Card_Images/green_tilde_dashed_2.PNG)
![red, rhombus, three, filled](/Card_Images/red_rhombus_filled_3.PNG)

#### Non Set Examples

1. All 3 cards have different colors, shapes and numbers, and 2 are open one is not.<br>
![red, rhombus, three, dashed](/Card_Images/red_rhombus_dashed_3.PNG)
![purple, oval, one, empty](/Card_Images/purple_oval_empty_1.PNG)
![green, tilde, two, empty](/Card_Images/green_tilde_empty_2.PNG)
2. All 3 cards are squiggles, have different shadings and numbers, however two are red and one is not.<br>
![red, tilde, three, dashed](/Card_Images/red_tilde_dashed_3.PNG)
![purple, tilde, one, empty](/Card_Images/purple_tilde_empty_1.PNG)
![red, tilde, two, filled](/Card_Images/red_tilde_filled_2.PNG)

#### "Magic Rule"

If two are... and one is not, then it is *not* a set.

### Game Play

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


