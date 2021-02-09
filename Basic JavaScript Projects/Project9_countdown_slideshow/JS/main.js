
function countdown() {
    var seconds = document.getElementById("seconds").value;  // Getting seconds to countdown from HTML input
    
    function tick() {    //  Counts down from seconds value, with 1000ms delay.
        seconds = seconds - 1;
        timer.innerHTML = seconds;  // Shows countdown on web page
        setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");  // Raises alert when the last second is over.
        }
    }

    tick();  
}

var slideIndex = 1;
showSlides(slideIndex);  // Starts slide show with slide 1, calling showSlides function.

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);  // Increments slide number up/down by one when back/forward controls are clicked
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);  // Updates current slide number to given slide when called
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");  // Stores html slide elements in variable 'slides'
    var dots = document.getElementsByClassName("dot");  // Stores html dot elements in varuable 'dots'
    if (n > slides.length) {slideIndex = 1}   // Goes back to the first slide if the forward control is used at the end.
    if (n < 1) {slideIndex = slides.length}   // Goes to the last slide if the back control is used at the beginning.
    for (i = 0; i < slides.length; i++) {  // Cycles through slides, removing display of previous slide.
        slides[i].style.display = "none";    
    }
    for (i = 0; i < dots.length; i++) {   // Cycles through slides, replacing dots classname
        dots[i].className = dots[i].className.replace(" active", "");    
    }
    slides[slideIndex-1].style.display = "block";  // displays current slide
    dots[slideIndex-1].className += " active";  // 
}

