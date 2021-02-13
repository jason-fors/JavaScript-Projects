
// creates an object to keep track of values
const Calculator = {
    // this displays 0 on the screen
    Display_Value: '0',
    //  this will hold the first operand for any expressions, set to null initially
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, set to null initially
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // Checking to see if Wait_Second_Operand is true and set Display_Value to key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        // this overwrites Display_Value if the current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when an operator key is pressed, convert current number displayed on screen to number and then store result in
    // Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists and if Wait_Second_Operand is true, then updates operator and exists from function
    if (operator && Calculator.Wait_Seond_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;       
    }
    else if (operator) {
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for operator in Perform_Calculation object and function taht matches operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // add a fixed amount of numbers after decimal
        result = Number(result).toFixed(9)
        // this will emove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {  
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {  // restores Calculator to initial values
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// this section monitors button clicks
const keys=document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represent the element clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    // ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})