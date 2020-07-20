
$(function(){
	 var lastScrollTop = 0, delta = 120;
	 $('#navFeature').on('click', function(){
			$('.navbar').addClass("navbar-hide");
	 });
	 $('#navExpertise').on('click', function(){
		 $('.navbar').addClass("navbar-hide");
	 });
	 $(window).scroll(function(){
		 var nowScrollTop = $(this).scrollTop();
		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
		 	if (nowScrollTop > lastScrollTop){
		 		// ACTION ON
		 		// SCROLLING DOWN
         $('.navbar').addClass("navbar-hide");
		 	} else{
		 		// ACTION ON
		 		// SCROLLING UP
				$('.navbar').removeClass("navbar-hide");

			}
		 lastScrollTop = nowScrollTop;
		 }
	 });
 });

 // $('div.navbar-collapse a').click(function(){
 // 			$(".navbar-collapse").collapse('hide');
 // 	});



$(document).ready(function(){
  // Add smooth scrolling to all links

  $("#pointer").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

	$("#navExpertise").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

	$("#navFeature").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

});

$("#goHome").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
