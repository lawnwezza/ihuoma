Template.slideshow.rendered = function() {
  $(document).ready(function() {
    $("#myCarousel").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1,
      autoplay:1000,
      loop:true,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    });
  });
};
