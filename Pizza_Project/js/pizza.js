
function getReceipt() {
    // Initializes string so it can be passed from function to function, growing line by line
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); 

    // Getting size of pizza from user input
    for (var i = 0; i < sizeArray.length; i++) {  
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Adding price of selected pizza to total
    if (selectedSize === "Personal Pizza") { sizeTotal = 6;}
    else if (selectedSize === "Small Pizza") { sizeTotal = 8;}
    else if (selectedSize === "Medium Pizza") { sizeTotal = 10;}
    else if (selectedSize === "Large Pizza") { sizeTotal = 14;}
    else if (selectedSize === "Extra Large Pizza") { sizeTotal = 16;}
    runningTotal = sizeTotal;
    // Showing pizza selection and price in console
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

// Getting topping inputs from user and adding $1 for each topping to price
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    // Iterates through topping inputs and adds toppings to toppingArray and text1 if checked
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // Subtracts one topping for free topping deal
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    else {
        toppingTotal = 0;
    }
    // Adds topping cost to total
    runningTotal = (runningTotal + toppingTotal);
    // Showing selections and prices in console
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    // Displays selections and prices below menu
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};

