(function () {
  "use strict";

  document.documentElement.classList.add("hero-animate");
  window.addEventListener("load", function () {
    document.querySelector(".hero-animate")?.classList.add("loaded");
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* FAQ accordion: swap +/- icons to match design */
  var acc = document.getElementById("faqAccordion");
  if (acc) {
    acc.querySelectorAll(".accordion-item").forEach(function (item) {
      var btn = item.querySelector(".accordion-button");
      var plus = btn && btn.querySelector(".icon-plus");
      var minus = btn && btn.querySelector(".icon-minus");
      if (!btn || !plus || !minus) return;

      function syncIcons() {
        var open = !btn.classList.contains("collapsed");
        plus.style.display = open ? "none" : "block";
        minus.style.display = open ? "block" : "none";
      }

      item.addEventListener("shown.bs.collapse", syncIcons);
      item.addEventListener("hidden.bs.collapse", syncIcons);
      syncIcons();
    });
  }

  /* Navbar: close mobile menu on anchor click */
  document.querySelectorAll(".site-header .navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.querySelector(".navbar-collapse");
      if (nav && nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  /* Estimate form: no backend — confirm submit so clicks feel responsive */
  var estForm = document.querySelector(".estimate-card form");
  if (estForm) {
    estForm.addEventListener("submit", function (e) {
      if (!estForm.checkValidity()) return;
      e.preventDefault();
      var submitBtn = estForm.querySelector(".btn-send");
      if (!submitBtn) return;
      var prev = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sent!";
      window.setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = prev;
        estForm.reset();
      }, 2200);
    });
  }
})();
