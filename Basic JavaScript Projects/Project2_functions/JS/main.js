
document.write("Is this thing on?"); // Just a test to make sure link to js file is working.

function assignTwo() {  // Creating function to concatenate two strings.
    var wordone = "Good ";
    var wordtwo = "job!"; 
    
    wordone += wordtwo;  // using += operator
    document.getElementById("paragraph_1").innerHTML = wordone;  // Replacing contents of html paragraph with concatenated string.
}

