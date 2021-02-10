
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

function Age_Test() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
