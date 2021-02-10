
function Call_Loop() { // Counts down from 10, displaying numbers on web page
    var message = "";
    var counter = 10;
    while (counter > -1) {
        message += "<br>" + counter;
        document.getElementById("Loop").innerHTML = message;
        counter--;
    }
    document.getElementById("Length").innerHTML = message.length;
}

function for_Loop() {  // Creates list of instruments then cycles through them with for loop.
    var Instruments = ["Flute", "Clarinet", "Trumpet", "Violin", "Guitar", "Trombone", "Drum", "Piano"];
    var Content = "";
    var counter;
    for (counter = 0; counter < Instruments.length; counter++) {
        Content += Instruments[counter] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // Creates array and then cycles through it with for loop. Tests block scope variable.
    var Fruits = [];
    Fruits[1] = "apple";
    Fruits[2] = "banana";
    Fruits[3] = "peach";
    Fruits[4] = "orange";
    Fruits[5] = "pear";
    for (counter = 0; counter < Fruits.length; counter++){
        let oldFruit = Fruits[1];
        console.log("<br>oldFruit inside block: " + oldFruit);
    }
    // console.log("oldFruit outside block: " + oldFruit); // This will raise error because oldFruit is a block variable.
    document.getElementById("Array").innerHTML = "Today I will eat a " + Fruits[3] + ".";
}

function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; // Defining constant. You cannot reassign this identifier.
    Musical_Instrument.color = "blue"; // You can the values in it.
    Musical_Instrument.price = "$900"; // You can add pairs to it.
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function get_Name() {  // Uses return keyword
    return "Howard";
}

function call_Name() {  // Calls function with a return value.
    document.getElementById("Name").innerHTML = get_Name();
}


let student = {  // Defining student object. Has attributes and a behavior.
    year: "Sophomore",
    major: "Physics",
    gpa: "3.8",
    suspended: "No",
    description : function() {
        return "This student is a " + this.year + " " + this.major + " major with a " + this.gpa + " GPA.";
    }
}
document.getElementById("Student_Object").innerHTML = student.description(); // Using student description method.


function checkWord() {  // Gets guess from HTML input and looks for the letter 'a'. Uses break and continue.
    wordGuess = document.getElementById("Letter_Guess").value;
    var i;
    var response = "";
    var gotLetter = false;
    for (i = 0; i < wordGuess.length; i++) {
        if (wordGuess[i] == "a") {
            response += "You got it right! 'a' was my letter!";
            gotLetter = true;
            break;  // Exits loop.
        }
        else {
            response += wordGuess[i] + " is not my letter.<br>"
            continue; // Starts next loop.
        }
        
    }
    if (gotLetter == false) {
        document.getElementById("Guess_Response").innerHTML= "My letter was not in your word.";
    }
    else {
        document.getElementById("Guess_Response").innerHTML= response;
    }
}
