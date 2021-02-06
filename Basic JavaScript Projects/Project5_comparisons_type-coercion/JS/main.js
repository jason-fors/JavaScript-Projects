
function Number_Type() {
    document.getElementById("Test").innerHTML = 0/0;  // Should return 'NaN'
}



document.write(typeof "dog");  // Returns 'string'
document.write("<br><br>");  // Adding line breaks in HTML Doc.
document.write(isNaN("word")); // Returns 'true'
document.write("<br><br>");
document.write(2E310);  // Returns 'Infinity'
document.write("<br><br>");
document.write(-2E310);  // Returns '-Infinity'
document.write("<br><br>");
document.write(10<2);  // Returns 'false'
document.write("<br><br>");
document.write(10>2);  // Returns 'true'
document.write("<br><br>");
document.write("50" + 50);  // Returns '5050'
document.write("<br><br>");
document.write(50==50);  // Returns 'true'
document.write("<br><br>");
document.write(50==20);  // Returns 'false'
document.write("<br><br>");
document.write(50===50);  // Returns 'true'
document.write("<br><br>");
document.write("50"===50);  // Returns 'false'
document.write("<br><br>");
document.write("50"===40);  // Returns 'false'
document.write("<br><br>");
document.write("50"==="500");  // Returns 'false'

document.write("<br><br>AND True: ");
document.write(1==1 && 1==1);  // Returns 'true'
document.write("<br><br>AND False: ");
document.write(1==1 && 1==2);  // Returns 'false'
document.write("<br><br>OR True: ");
document.write(1==1 || 1==2);  // Returns 'true'
document.write("<br><br>OR False: ");
document.write(1==2 || 1==2);  // Returns 'false'
document.write("<br><br>NOT True: ");
document.write(!(50==20));  // Returns 'true'
document.write("<br><br>NOT False: ");
document.write(!(50==50));  // Returns 'false'

console.log(4>4);


