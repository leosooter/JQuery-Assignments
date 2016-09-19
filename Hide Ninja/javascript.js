/* global $ */
$(".ninja").click(function(){
  $(this).hide();
})
$("#restore").click(function(){
  $(".ninja").show();
})
