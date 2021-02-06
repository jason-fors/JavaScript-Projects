function addTwo(){   // Example of addition
    var result = 2 + 2;
    document.getElementById("add").innerHTML = result; // Replaces content of paragraph with id "add" with result.
}

function subtractTwo(){ // Example of subtraction
    var result = 7-5;
    document.getElementById("subtract").innerHTML = "7-5= " + result;
}

function multiplication(){  // Example of multiplication
    var result = 7*5;
    document.getElementById("multiply").innerHTML = "7*5= " + result;
}

function division(){   // Example of division
    var result = 9/3;
    document.getElementById("divide").innerHTML = "9/3= " + result;
}

function complex(){   // Example of using multiple operators
    var result = 4*8/2-5;
    document.getElementById("mixed").innerHTML = "4*8/2-5= " + result;
}

function modulo(){   // Example of using modulus operator
    var result = 29 % 11;
    document.getElementById("remainder").innerHTML = "The remainder of 29 divided by 11 is " + result;
}

function negation(){   // Example of using negate operator
    var result = 27;
    document.getElementById("negate").innerHTML = "Negating 27 gives us " + -result;
}

function incrementDecrement(){   // Example of incrementing/decrementing
    var result = 27;
    result++;         // Must do this before the return statement or it returns the value before incrementing.
    document.getElementById("increment").innerHTML = "Counting up once to 27 gives us " + result;
    result--;
    result--;
    document.getElementById("decrement").innerHTML = "Then counting down twice gives us " + result;
}

function random(){   // Returns a random number 1 to 100 to "randomize" paragraph element.
    var result = (Math.random()*100);
    result = Math.round(result);  // Rounds result to an whole number.
    document.getElementById("randomize").innerHTML = result;
}
