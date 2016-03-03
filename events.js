// Create a variable list of all the ID's you will need to work with
var output = document.getElementById("output-target");
var keyPress = document.getElementById("keyPress-input");
var guineaPig = document.getElementById("guinea-pig"); 
var buttonColor = document.getElementById("add-color"); 
var buttonHulkify = document.getElementById("make-large");
var buttonCapture = document.getElementById("add-border"); 
var buttonRounded = document.getElementById("add-rounding"); 
var header = document.getElementById("page-header");
var title = document.getElementById("page-title"); 
// This one is different and needs to be captured by class name - it will always be an array
 var article = document.getElementsByClassName("article-section");

// we will need event listeners including:
// click - this will require a for loop as we will need to output different messages for each article
// article.addEventListener("click", function() {
//   output.innerHTML = "you clicked on the ??? of the article"
// }
// console.log(output);
// mouseover
title.addEventListener("mouseover", function() {
  output.innerHTML = "you moved your mouse over the header"; 
});

// mouse-out


