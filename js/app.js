//Problem: No user interaction capability
//Solution: When user interacts, cause changes appropriately
var color = $(".selected").css("background-color");;

//When clicking on control list items
$(".controls li").click(function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//When add color is pressed
  //Show color select or hide the color select

//When color sliders change
  //update the new color span

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines
