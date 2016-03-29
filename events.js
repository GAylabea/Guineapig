// Create a variable list of all the ID's you will need to work with
var output = document.getElementById("output-target");
var keyPress = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig"); 
var buttonGroup = document.getElementsByTagName("button");
var buttonColor = document.getElementById("add-color"); 
var buttonHulkify = document.getElementById("make-large");
var buttonRounded = document.getElementById("add-rounding"); 
var buttonCapture = document.getElementById("add-border"); 
var header = document.getElementById("page-header");
var title = document.getElementById("page-title"); 
// This one is different and needs to be captured by class name - it will always be an array and you can loop thru it
var article = document.getElementsByClassName("article-section");

// we will need event listeners including:
// Section identification on click - this will require a for loop as we will need to output different messages for each article
// This is the function to be used with the callback we define later
function handleSectionClick(MouseEvent) {
  console.log(MouseEvent);
  var elementText = MouseEvent.target.innerHTML;
  output.innerHTML = "you clicked on the " + elementText + " section";
}

// the handleSectionClick is a function reference - a "callback" function that we do not call imediately - it is waiting for the mouse event above. 
  for (var i = 0; i < article.length; i++) {
    article.item(i).addEventListener ("click", handleSectionClick);
  } 

// mirroring text - whatever the user is typing shows up in the output
keyPress.addEventListener("keyup", function(event) {
  output.innerHTML = keyPress.value;
}); 

// mouseover
title.addEventListener("mouseover", function() {
  output.innerHTML = "you moved your mouse over the header"; 
});

// mouseleave
title.addEventListener("mouseleave", function() {
  output.innerHTML = "you left me!";
}); 

// In all of these, if you use "add" instead of "toggle", at some point you will have to use "remove"
// change the output text color to blue on the click of the button - see also, the CSS file
buttonColor.addEventListener("click", function() {
  guineaPig.classList.toggle("blue"); 
}); 

//Hulkify button will make the output text much larger
buttonHulkify.addEventListener("click", function() {
  guineaPig.classList.toggle("large"); 
}); 

//Capture button will add a border around output text
buttonCapture.addEventListener("click", function() {
  guineaPig.classList.toggle("border"); 
});

//Rounded button click will make the border rounded
buttonRounded.addEventListener("click", function(){
  guineaPig.classList.toggle("rounded");
});

// Make the first section bold and the last bold and italic
for (var i=0; i < article.length; i++) {
  article[0].classList.add("bold");
  article[article.length -1].classList.add("italic"); 
}

//Make the buttons block instead of inline; NOTE! That you have to add the [i] for the loop to apply the css style to EACH button
for (var i=0; i<buttonGroup.length ; i++) {
  buttonGroup[i].classList.add("block"); 
}
