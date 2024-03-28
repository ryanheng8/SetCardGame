/*** This file contains all of the global variables ***/

//Defines initial conditions
const INITZERO = 0;
const INITTIME = 10;

//Arrays to hold the deck of cards and playDeck of cards dealt
var deck = [];
var playDeck = [];

//Variables to hold both the player and computer scores
var playerScore = INITZERO;
var computerScore = INITZERO;

//Variables to determine the number of clicks
var numClick = INITZERO; //Global variable to track the number of cards clicked
var time = INITTIME; //Global variable to track the amount of time a user has to select up to numClick = 3 cards
var hintCounter = INITZERO; //Creates a counter for the number of times give hint is pressed.

//Variables to initialize and create a computer player
var computerMode; //Computer mode to determine whether computer should be created
var difficulty; //Computer difficulty