
// Keeps track of whose turn it is.
let activePlayer = 'X';

// Stores an array o moves. Will use to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square.
function placeXOro(squareNumber) {
    // This condition assures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/x.png")';
            // Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        }
        else {
            // If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        }
        // If active player is anything other than 'X'.
        else {
            // Change the activePlayer to 'X'
            activePlayer = 'X';
        }



        // This function plays placement sound.
        audio('./media/place.mp3');
        // This condition checks to see if it s computer's turn.
        if(activePlayer === 'O') {
            // This function disables clicking for computer choice.
            disableClick();
            // This function waits 1 second before placing the image and enabling click.
            setTimeout(function () { computersTurn(); }, 1000) ;
        }
        // Returning true is needed for our computersTurn() function to work.
        return true;
    }

    // This function results in a random square being selected.
    function computersTurn() {
        // This boolean is needed for our while loop.
        let success = false;
        // This variable stores a randome number 0-8
        let pickASquare;
        // This condition allows our while loop to keep trying if square already selected.
        while(!success) {
            // A random number between 0 and 8 is slected
            pickASquare = String(Math.floor(Math.random()*9));
            // If the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOro(pickASquare)) {
                // This line call teh function.
                placeXOro(pickASquare);
                // This changs our boolean and ends the loop.
                success = true;
            }
        }
    }

}

// Checking to see if there is a win or full grid after every turn.
function checkWinConditions() {
    // X 012 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    // X 345 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    // X 678 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    // X 036 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    // X 147 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    // X 258 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    // X 642 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
    // X 048 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    // O 012 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    // O 345 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    // O 678 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    // O 036 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    // O 147 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    // O 258 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    // O 642 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    // O 048 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}

    // This condition checks for a tie. If none of the above conditions register and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        // This function plays the tie game sound.
        audio('./media/tie.mp3');
        // This funciton sets a 1 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }
}

// This function checks if an array includes 3 strings.
// It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // The next 3 variables will be sued to check for 3 in a row.
    const a = selectedSquares.includes(squareA) ;
    const b = selectedSquares.includes(squareB) ;
    const c = selectedSquares.includes(squareC) ;
    // If the 3 variables passed are all included in the array, true is returned
    // and the 'else if' condition executes the drawWinLine function.
    if (a === true && b === true && c === true) { return true;}
}


// This function makes body element temporarily unclickable.
function disableClick() {
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}


// This function takes a string parameter of the path set earlier for placement sound ('./media/place.mp3')
function audio(audioURL) {
    // Creates a new audio object and passes path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays audio sound.
    audio.play();
}


// This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line accesses html canvas element.
    const canvas = document.getElementById('win-lines');
    // This line gives access to methods and propoerties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a line's x axis is.
    let x1 = coordX1,
        // This line indicates where the start of a line's y axis is.
        y1 = coordY1,
        // This line indicates where the end of a line's x axis is.
        x2 = coordX2,
        // This line indicates where the end of a line's y axis is.
        y2 = coordY2,
        // This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        // This variable stores temporary y axis data we update in our animation loop.
        y = y1;

    // This function interacts with the canvas
    function animateLineDrawing() {
        // This variable creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from last loop iteration.
        c.clearRect(0,0,608,608);
        // This method starts a new path.
        c.beginPath();
        // This method moves to a starting point for the line.
        c.moveTo(x1,y1);
        // This method indicates the end point of the line.
        c.lineTo(x,y);
        // This method sets the width of the line.
        c.lineWidth = 10;
        // This method sets the color of the line.
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        // This method draws everything laid out above.
        c.stroke();
        // This condition checks if endpoint has been reached.
        if (x1 <= x2 && y1 <= y2) {
            // This condition adds 10 to the previous end x point.
            if (x < x2) { x += 10; }
            // This condition adds 10 to the previous end y point.
            if (y < y2) { y += 10; }
            // This condition cancels animation loop if reach end points.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } 
        }
        // This condition is similar to the one above and necessary for 642 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // This function clears canvas after win line is drawn.
    function clear() {
        // This line starts animation loop.
        const animationLoop = requestAnimationFrame(clear);
        // This line clears canvas.
        c.clearRect(0,0,608,608);
        // This line stop anipation loop.
        cancelAnimationFrame(animationLoop) ;
    }

    // This line disallows clicking while the win sound is playing.
    disableClick();
    // This line plays the win sounds.
    audio('./media/winGame.mp3') ;
    // This line calls main animation loop.
    animateLineDrawing();
    // This line waits 1s then clears canvas, resets game, and reallows clicking.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}



// This function resets the game in a tie or a win.
function resetGame() {
    // This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        // This variable gets html element of i.
        let square = document.getElementById(String(i));
        // This removes element's backgroundImage.
        square.style.backgroundImage = '';
    }
    // This resets array so it is empty and game can start over.
    selectedSquares = [];
}

