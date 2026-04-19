(function ($) {
  "use strict";

  $(function () {
    var $owl = $("#testimonialsOwl");
    if (!$owl.length || typeof $.fn.owlCarousel !== "function") {
      return;
    }

    $owl.owlCarousel({
      loop: true,
      center: true,
      items: 1,
      margin: 20,
      stagePadding: 32,
      nav: false,
      dots: false,
      smartSpeed: 450,
      responsive: {
        0: { margin: 16, stagePadding: 28 },
        576: { margin: 18, stagePadding: 52 },
        992: { margin: 18, stagePadding: 388 }
      }
    });

    $("#testimonialPrev").on("click", function () {
      $owl.trigger("prev.owl.carousel");
    });
    $("#testimonialNext").on("click", function () {
      $owl.trigger("next.owl.carousel");
    });
  });
})(jQuery);
