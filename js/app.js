
// Get the modal and Get the button that opens the modal
// rahul
var modal1 = document.getElementById("rahulModal");
var btn1 = document.getElementById("rahulBtn");
//Ravish
var modal2 = document.getElementById("RavishModal");
var btn2 = document.getElementById("RavishBtn");
//kishore
var modal3 = document.getElementById("KishoreModal");
var btn3 = document.getElementById("KishoreBtn");
//Kush
var modal4 = document.getElementById("KushModal");
var btn4 = document.getElementById("KushBtn");
//others
var modal5 = document.getElementById("othersModal");
var btn5 = document.getElementById("othersBtn");
/*
    rahul   
*/

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}

/*
    Ravish
*/
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}

/*
    Kishore
*/
btn3.onclick = function() {
  modal3.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}

/*
    Kush
*/
btn4.onclick = function() {
  modal4.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
}

/*
    Kush
*/
btn4.onclick = function() {
  modal4.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
}

/*
    others
*/
btn5.onclick = function() {
  modal5.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal5.style.display = "none";
  }
}