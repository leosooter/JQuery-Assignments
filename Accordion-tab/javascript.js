/* global $ */
var selectedEffect = false;

$(document).ready(function(){
  $("#accordion").accordion();
  $( "#tabs" ).tabs();
  //Select effect
  $("#effects li").click(function(){
    console.log("Adding Effect: " + $(this).attr("id"));
    selectedEffect = $(this).attr("id");
  });
  //Add shape to target
  $("#shapes li").click(function(){
    $("#target").removeClass();
    console.log("Adding Class: " + $(this).attr("id"));
    $("#target").addClass($(this).attr("id"));
  });
  //Add color to target
  $("#colors li").click(function(){
    console.log("Changinging Color To: " + $(this).attr("id"));
    $("#target").css("border-color", "" + $(this).attr("id"));
  });
  //Trigger effect
  $("#trigger").click(function(){
    if(selectedEffect){
      console.log("Showing effect: " + selectedEffect);
      $("#target").effect(selectedEffect, 1000, reset);
    }
    else{
      alert("Please choose an effect from the 'Options' tab.");
    }
  })

});
function reset(){
  console.log("Reset");
  $("#target").show();
}
