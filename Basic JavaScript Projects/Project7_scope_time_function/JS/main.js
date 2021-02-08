
var globalVariable = 25;

function makeLocal() {
    var localVariable = 35;
    document.getElementById("Use_Local").innerHTML = localVariable + globalVariable;
}

function breakLocal() {
    console.log(localVariable + globalVariable);    
}

function get_Date() {
    if (new Date().getHours() < 6) {
        document.getElementById("Greeting").innerHTML = "You're up early!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good day!";
    }
    
}


function checkNumber() {
    var numberGuess = document.getElementById("Number_Guess").value;
    if (numberGuess == 5) {
        document.getElementById("Guess_Response").innerHTML="You got it right!";}
    else if (numberGuess < 5) {
        document.getElementById("Guess_Response").innerHTML="Too low!";}
    else {
        document.getElementById("Guess_Response").innerHTML="Too high!";
    }
}