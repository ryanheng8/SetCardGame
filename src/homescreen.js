/* 
Creates the buttons for the homescreen using event listeners along with getting elements by id.
*/
function homescreen() {

    //Creates a listener for clicking play to open the game screen.
    let playButton = document.getElementById("playButtonId");
    if(playButton){ //checking to see if element is not null
        playButton.addEventListener("click", function openGameScreen() {
            sessionStorage.setItem("Computer", false);
            window.location.href= "gameScreen.html";
        });
    }

    //Creates a listener for clicking play vs CPU to open game screen in CPU mode
    let playComputerButton = document.getElementById("playComputerId");
    if(playComputerButton){ //checking to see if element is not null
        playComputerButton.addEventListener("click", function openGameScreen() {
            sessionStorage.setItem("Computer", true);
            sessionStorage.setItem("Difficulty", diff.innerHTML)
            window.location.href = "gameScreen.html";
        });
    }

    //Creates a listener for clicking rules to open the rules screen.
    let rulesButton = document.getElementById("rulesButtonId");
    if(rulesButton){ //checking to see if element is not null
        rulesButton.addEventListener("click", function openForm() {
            document.getElementById("setRules").style.display = "block";
        });
    }
    //Creates a listener for clicking close to close the rules screen.
    let closeButton = document.getElementById("closeButtonId");
    if(closeButton){ //checking to see if element is not null
        closeButton.addEventListener("click", function closeForm() {
            document.getElementById("setRules").style.display = "none";
        });
    }

    let diff = document.getElementById("chooseDiffId");

    let easyDiff = document.getElementById("easyButtonId");
    if (easyDiff){ //checking to see if element is not null
        easyDiff.addEventListener("click", function selectEasy() {
            diff.innerHTML = "Easy";
        });
    }

    let medDiff = document.getElementById("mediumButtonId");
    if (medDiff){ //checking to see if element is not null
        medDiff.addEventListener("click", function selectMed() {
            diff.innerHTML = "Medium";
        });
    }

    let hardDiff = document.getElementById("hardButtonId");
    if (hardDiff){ //checking to see if element is not null
        hardDiff.addEventListener("click", function selectHard() {
            diff.innerHTML = "Hard";
        });
    }
}
homescreen();