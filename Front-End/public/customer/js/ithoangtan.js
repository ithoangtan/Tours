(function($) {
   // $("#bestTourCarousel").on("slide.bs.carousel", function(e) {
   //    var $e = $(e.relatedTarget);
   //    var idx = $e.index();
   //    var itemsPerSlide = 4;
   //    var totalItems = $("#bestTourCarousel .carousel-item").length;
   //    if (idx >= totalItems - (itemsPerSlide - 1)) {
   //       var it = itemsPerSlide - (totalItems - idx);
   //       for (var i = 0; i < it; i++) {
   //          // append slides to end
   //          if (e.direction == "left") {
   //             $("#bestTourCarousel .carousel-item")
   //                .eq(i)
   //                .appendTo("#bestTourCarousel .carousel-inner");
   //          } else {
   //             $("#bestTourCarousel .carousel-item")
   //                .eq(0)
   //                .appendTo("#bestTourCarousel .carousel-inner");
   //          }
   //       }
   //    }
   // });
   $("#bestTourCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      var totalItems = $("#bestTourCarousel .carousel-item").length;
      if (idx >= totalItems - (itemsPerSlide - 1)) {
         var it = itemsPerSlide - (totalItems - idx);
         for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction === "right") {
               $("#bestTourCarousel .carousel-item")
                  .eq(0)
                  .appendTo("#bestTourCarousel .carousel-inner");
            } else {
               $("#bestTourCarousel .carousel-item")
                  .eq(i)
                  .appendTo("#bestTourCarousel .carousel-inner");
            }
         }
      }
   });
   $("#recentStoriesCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      var totalItems = $("#recentStoriesCarousel .carousel-item").length;
      if (idx >= totalItems - (itemsPerSlide - 1)) {
         var it = itemsPerSlide - (totalItems - idx);
         for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction === "left") {
               $("#recentStoriesCarousel .carousel-item")
                  .eq(i)
                  .appendTo("#recentStoriesCarousel .carousel-inner");
            } else {
               $("#recentStoriesCarousel .carousel-item")
                  .eq(0)
                  .appendTo("#recentStoriesCarousel .carousel-inner");
            }
         }
      }
   });
})(jQuery);
