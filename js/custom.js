$(function(){
    $("#typed").typed({
        // stringsElement: $('#typed-strings')
        strings: ["Salams*, we're Muslamic Makers ^2000", "We're diversifying the tech scene"]
    });
    $("#typed2").typed({
        // stringsElement: $('#typed-strings')
        strings: ["^2000 <br> * peace on you"],
        typeSpeed: 4
    });
});

$(document).ready(function(){
  var height = $('.hero').height();

  $(document).on('scroll', function(){
    var scrolled = $(document).scrollTop() + 30;
    if (scrolled > height) {
      $('nav').addClass('nav-visible');
      $('nav').removeClass('nav-transparent');
    } else {
      $('nav').addClass('nav-transparent');
      $('nav').removeClass('nav-visible');
    }
  });
});

$('.nav-link').click(function(e){
  e.preventDefault();
  var hash = this.hash;
  // var point = $(this).attr('href'));
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  });

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
//
// var header = $('.hero');
// var range = $('.hero').height();
//
// $(window).on('scroll', function () {
//
//     var scrollTop = $(this).scrollTop();
//     var offset = header.offset().top;
//     var height = header.outerHeight();
//     offset = offset + height / 1;
//     var calc = 1 - (scrollTop - offset + range) / range;
//
//     header.css({ 'opacity': calc });
//
//     if ( calc > '1' ) {
//       header.css({ 'opacity': 1 });
//     } else if ( calc < '0' ) {
//       header.css({ 'opacity': 0 });
//     }

// if (this.attendee.timingHabits === "muslimTiming") {
//   var startTime = "4.00pm";
// } else if (this.attendee.timingHabits === "genericEthnicTiming") {
//   var startTime = "5.00pm";
// } else {
//   var startTime = "6.00pm";
// };
