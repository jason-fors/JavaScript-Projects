
function Age_Test() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


// Writing object constructor function.
function Student(Name, Class, GPA, Graduated) {
    this.Name = Name;
    this.Class = Class;
    this.GPA = GPA;
    this.Graduated = Graduated;  
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " 
    + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model
    + " manufactured in " + Erik.Vehicle_Year;
}

function say_Hi(){
    document.getElementById("New_and_This").innerHTML = "Hi.";
}

// Making nested function.

function Nest(){
    function Nested(){
        document.getElementById("Nested_Function").innerHTML = "I'm nested!";
    }
    Nested();
}


private = "private";  // using reserved word. This one works fine, but likely interferes with use of it after.
document.write(private); // Other reserved words (like 'else') break the program.




