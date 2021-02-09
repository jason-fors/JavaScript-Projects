
var word1 = "Hello "; // Just playing with some global variables.
var word2 = "World!";
var word3 = " I have concatenated.";

function Concatenate_Stuff() { // Concatenates multiple strings.
    phrase = word1.concat(word2, word3);
    document.getElementById("concatenating").innerHTML = phrase;
}

function Slice_String() {  //To slice strings. Also trying out converting to upper case.
    var original_sentence = "I have learned how to slice strings!";
    var caps_sentence = original_sentence.toUpperCase();
    var start_with = caps_sentence.search("S"); // Case sensitive. Must use capital 'S' here.
    console.log(start_with);  //Making sure gets correct start index.
    var end_at = caps_sentence.search("!");
    console.log(end_at); //Making sure gets correct end index.
    var fragment = caps_sentence.slice(start_with,end_at); //Slicing "SLICE STRINGS"
    document.getElementById("slice").innerHTML = fragment; 
}

function Number_To_String() { // Converts number to string type.
    var myNumber = 27;
    stringNumber = myNumber.toString();
    document.getElementById("ntos").innerHTML = myNumber.toString();
    console.log(typeof(stringNumber)); //Checking type because it looks the same on web page.
}

function Precise_Number() {     // Provides number to number of significant digits in argument.
    var myNumber = 12938.3012987376112;
    document.getElementById("to_precision").innerHTML = myNumber.toPrecision(8);
}

function Fixed_String() {     //Converts to string to number of decimal places in argument.
    var myNumber = 227.0564654650468406;
    stringNumber = myNumber.toFixed(3);
    document.getElementById("to_fixed").innerHTML = myNumber.toFixed(3);
    console.log(typeof(stringNumber));
}

function Value_Of() {      // Provides primitive value of a variable.
    var myString = "This is my string!";
    document.getElementById("value_of").innerHTML = myString.valueOf();
}
