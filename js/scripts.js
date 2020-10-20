$(document).ready(function() {
  $(".clickable").click(function() {
    $("#waterfront-showing").toggle();
    $("#waterfront-hidden").toggle();
    $("#hideshow-hidden").toggle();
    $("#hideshow-hidden").fadeIn();
  });
});