/* global $ */
$("img").hover(function(){
  var src = $(this).attr("src");
  $(this).attr("src", $(this).attr("data-alt-src"));
  $(this).attr("data-alt-src", src);
  $(this).attr("alt", "Mandril");
}, function(){
  var src = $(this).attr("src");
  $(this).attr("src", $(this).attr("data-alt-src"));
  $(this).attr("data-alt-src", src);
  $(this).attr("alt", "Lion");
});
