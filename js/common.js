document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme-js"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }


  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };


  // Theme Switcher
  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });

    window.addEventListener("resize", () => {
      stopAnimation();
    });

    function stopAnimation() {
      document.body.classList.add("disable-animation");
      clearTimeout(disableTransition);
      disableTransition = setTimeout(() => {
        document.body.classList.remove("disable-animation");
      }, 100);
    }
  }


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post iframe:not(.reframe-off), .page iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page a img, .post a img, .gallery__image a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});


  /* =======================
  // Hero Testimonial Link Smooth Scroll
  ======================= */
  const heroTestimonialLink = document.querySelector('.hero-testimonial-link');
  
  if (heroTestimonialLink) {
    heroTestimonialLink.addEventListener("click", function (e) {
      e.preventDefault();
      const testimonialsSection = document.querySelector('#testimonials');
      if (testimonialsSection) {
        // Try modern smooth scroll first
        if ('scrollBehavior' in document.documentElement.style) {
          testimonialsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else {
          // Fallback for older browsers
          const targetPosition = testimonialsSection.offsetTop;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  }


  /* =======================
  // Scroll Top Button
  ======================= */
  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      // Try modern smooth scroll first
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } else {
        // Fallback smooth scroll animation
        const scrollToTop = () => {
          const currentScroll = window.scrollY;
          if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
        };
        scrollToTop();
      }
    }
  });


  /* =======================
  // Hero Parallax Effect
  ======================= */
  const heroBackground = document.querySelector('.hero__background');
  const heroSection = document.querySelector('.hero--background');
  
  if (heroBackground && heroSection) {
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;
      const heroTop = heroSection.offsetTop;
      
      // Only apply parallax when hero is in viewport
      if (scrolled < heroTop + heroHeight) {
        const parallaxSpeed = 0.3; // Further reduced for subtler effect
        const maxMove = heroHeight * 0.1; // Limit movement to 10% of hero height
        const yPos = Math.max(-maxMove, -(scrolled * parallaxSpeed));
        heroBackground.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateParallax();
  }

});