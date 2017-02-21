$(function(){
    $(".typed").typed({
      strings: ["Salams, we're Muslamic Makers", "We're diversifying the London tech scene."],
      typeSpeed: 20,
      backDelay: 1000,
      showCursor: false
    });
});


$(document).ready(function(){
  var height = $('.hero').height();

  $(document).on('scroll', function(){
    var scrolled = $(document).scrollTop() + 30;
    if (scrolled > height) {
      $('nav').css({"background-color":"#4A4A4A"});
    } else {
      $('nav').css({"background-color":""});
    }
  });

})

//
// $(document).on("scroll", function () {
//
//   // step 2 - Store the current pixels from the top of the page
//   // this happens everytime we scroll
//   var pixelsFromTop = $(document).scrollTop();
//
//
//
//   // step 3 - Use IF/Else to add and remove classes based on the current distance from the top
//   if (pixelsFromTop > 45) {
//     // adding a class withh cause the background to transition
//     $("body").addClass("blue");
//   } else {
//     $("body").removeClass("blue");
//   }
//
//   // step 5
//   // Toggle class is an alternative to the long way above
//
//   // Same as step 3 but a much quicker way of writing the code
//   $("body").toggleClass("rose", pixelsFromTop > 1200);
//   $("body").toggleClass("cubism", pixelsFromTop > 2400);
//
// });
