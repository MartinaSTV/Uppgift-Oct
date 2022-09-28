//Mobil skärm//
function mobilmenu(){
    var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Display Tema//
function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// storage Darkmode



//Kontroll kontaktformulär//
function validateForm(){
    var contactform = document.forms["contactform"]["inputname"].value;
    var inputlastName = document.forms ["contactform"]["inputlastName"].value;
    var inputemail = document.forms ["contactform"] ["inputemail"].value;
    var comment = document.forms["contactform"]["comment"].value;

    if (contactform==null || contactform=="") {
        alert("Fyll i ditt förnman");
        document.getElementById("inputname").focus();
        return false;
        }
    else if (inputlastName==null || inputlastName=="") {
        alert("Fyll i ditt Efternamn");
        document.getElementById("inputlastName").focus();
        return false;
        }
    else if (inputemail==null || inputemail==""){
        alert("Skriv in din mailadress");
        document.getElementById("inputemail").focus();
        return false;
    }
    else if (comment==null || comment=="") {
        alert("Skriv i din kommentar");
        document.getElementById("comment").focus();
        return false;
    };   
}

//slideshow//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
