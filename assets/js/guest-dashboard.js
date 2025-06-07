'use strict';

// Add event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Preloader
   * Add 'loaded' class to the body when the page is fully loaded.
   */
  const preloader = document.querySelector("[data-preaload]");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });
  }


  /**
   * Navbar toggle
   */
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    if (navbar) {
      navbar.classList.toggle("active");
    }
    if (overlay) {
      overlay.classList.toggle("active");
    }
    document.body.classList.toggle("nav-active");
  };

  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNavbar);
  });


  /**
   * Header
   * Active header when window scroll down to 100px.
   */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");

  if (header) {
    const headerActive = function () {
      if (window.scrollY > 100) {
        header.classList.add("active");
        if (backTopBtn) {
          backTopBtn.classList.add("active");
        }
      } else {
        header.classList.remove("active");
        if (backTopBtn) {
          backTopBtn.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", headerActive);
  }

});
