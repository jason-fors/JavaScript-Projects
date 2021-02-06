



function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function Second_Function() {
    var keyPress = "You pressed a key! Good job!!";
    document.getElementById("Press_Key").style.backgroundColor = "red";
}


var greet="Hello ", person="Jeff"; // Declare and assign variables.
greet = greet.fontcolor("blue");
person = person.fontcolor("red");

document.write(greet + person);

warning = "Enter at your own risk!";
window.alert(warning);

document.write(2+2); // Writing an expression. 

