'use strict'; //Yosh - I want to use the new set of rules

var startTheStory = confirm("How well do you know me, your pal Yoshi?");
console.log("startTheStory:", startTheStory);
if(startTheStory === true){
    alert("Here we Gooooo!!!");
    }else{
    alert("Game over! \(not really\), Here we Gooo!");
    }

var hatchFromAnEggAnswer = prompt("Did I hatch from an egg??").toLowerCase();
console.log("hatchFromAnEggAnswer:", hatchFromAnEggAnswer);
//---------------------------------------------------------
//HATCHQUSTION
//---------------------------------------------------------
if(hatchFromAnEggAnswer === "y" || hatchFromAnEggAnswer === "yes"){
    alert("Ya, Ya, Yoshi!");
    }else if(hatchFromAnEggAnswer === "n" || hatchFromAnEggAnswer === "no" ){
    alert("Unnnnnggg");
    }else{
    alert("Wah, Wah, Wahhhhhhhhh....");
    }

var areWeDifferentColorsAnswer = prompt("Do my friends and I come in different colors?").toLowerCase();
//---------------------------------------------------------
//COLORATION QUSTION
//---------------------------------------------------------
console.log("areWeDifferentColorsAnswer:", areWeDifferentColorsAnswer);
if(areWeDifferentColorsAnswer === "y" || areWeDifferentColorsAnswer ==="yes"){
    alert("Yoshi!!!!");
    }else if(areWeDifferentColorsAnswer === "n" || areWeDifferentColorsAnswer === "no"){
    alert("Mario... is that REALLY you...??");
    }else{
    alert("Ohhhh... Mama Mia!");
    }

var whereILiveAnswer = prompt("Do Yoshi's live on an island?").toLowerCase();
console.log("whereILiveAnswer:", whereILiveAnswer);
//---------------------------------------------------------
//WHERE DO I LIVE QUSTION
//---------------------------------------------------------
if(whereILiveAnswer === "y" || whereILiveAnswer === "yes"){
    alert("Yup, Yup!");
    }else if(whereILiveAnswer === "n" || whereILiveAnswer === "n"){        
    alert("*Sad Yoshi Face*");
    }else{
    alert("*Angry Ground Pound*");
    }

var pickyEaterAnswer = prompt("Am I a picky eater?").toLowerCase();
console.log("pickyEaterAnswer:", pickyEaterAnswer);
//---------------------------------------------------------
//DO I EAT EVERYTHING QUESTION
//---------------------------------------------------------
if(pickyEaterAnswer === "y" || pickyEaterAnswer === "yes") {
    alert("YOSHI!!");
    }else if(pickyEaterAnswer === "n" || pickyEaterAnswer ===  "no"){
    alert("Uh-oh... Noooo...");
    }else{
    alert("Trya your luck again!");
    }

var doILoveGoKarts = prompt("I may be a dinosaur... but do you think I like GO-Karts?").toLowerCase();
console.log("doILoveGoKarts:", doILoveGoKarts);
//---------------------------------------------------------
//DO I LOVE GO-KARTS QUSTION
//---------------------------------------------------------
if(doILoveGoKarts === "y" || doILoveGoKarts === "yes") {
    alert("*Vroooooom* Ya, Ya, YOSHI!");
    }else if(doILoveGoKarts === "n" || doILoveGoKarts === "no"){
    alert("Oh, no. I lose.");
    }else{
    alert("Booooo!");
}


//what we worked on
var guessesRemaining = 5; //Guess Counter
var numberOfGames = Number(prompt("Guess how many games Ive been featured in!" + "\n" + " Hint: It\'s an amount of spotted dogs."));
//inital prompt, first number is input


while(guessesRemaining > 0 && numberOfGames !== 101){
    guessesRemaining--;
    }if(numberOfGames === 101){
    alert("YA, YA, YA, YA, YA!!");
    }else if(guessesRemaining > 0 && numberOfGames!== 101){
    numberOfGames = Number(prompt('Oh No! You Only have ' + guessesRemaining + ' untill you lose!'));
    }else{
    alert("Ba Ba Baa Da Da Daa. GAME OVER");
    }









