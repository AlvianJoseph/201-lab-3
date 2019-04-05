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



var guessesRemaining = 5; //Guess Counter
var numberOfGames = 1; // AJ - placeholder variable so our while loop recognizes it
                       //the value is changed with user input



while(guessesRemaining > 0 && numberOfGames !== 101){
    numberOfGames = Number(prompt("Guess how many games Ive been featured in!" + "\n" + " Hint: It\'s an amount of spotted dogs."));
    guessesRemaining--;
    if(numberOfGames > 101 && guessesRemaining >= 1){
        alert("Too many. Chances remaining: " + guessesRemaining)// AJ You can adjust to your liking
    }else if(numberOfGames < 101 && guessesRemaining >= 1){
        alert('Too little. Chances remaining: ' + guessesRemaining)// AJ- adjust as needed
    }
    } 
    if(numberOfGames === 101){
        alert('Correct!');//AJ change to your liking
    }else if(guessesRemaining ===0){
        alert('you suck');//AJ - adjust to your liking
    }

 guessesRemaining = 6;
 var possibleAnswers = ['pizza', 'hamburgers', 'sushi', 'chicken', 'tacos', 'mexican', 'chinese']; //AJ- you can change these values later, just getting you started
 var userChoseCorrectly = false;

function question7(){
while(guessesRemaining > 0 && !userChoseCorrectly){
    var joshFavoriteFood = prompt("What's Josh's favorite food? There are lots of right answers")
    guessesRemaining--;
    console.log(joshFavoriteFood)
    for(var i = 0; i < possibleAnswers.length; i++){
        if(joshFavoriteFood === possibleAnswers[i]){
            alert("That's right! I love " + joshFavoriteFood + "!")
            userChoseCorrectly = true;}}

        if(userChoseCorrectly === false && guessesRemaining > 1){
            alert('Nope, try again!')} 
        console.log('user guessed wrong');
        
        if(guessesRemaining === 1){
        alert('last try');
        continue;}
    }
if(userChoseCorrectly === false){
        alert('better luck next time!')}
}
question7(); // AJ - This calls your function for the last question
//I put this in as an example but you can implement a function however you want

//AJ I deleted the extra spaces below the final code.
