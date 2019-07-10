require('bootstrap-grid');
require('./styles.scss');


(function($) {
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
      });
  }

  let size = window.matchMedia("(max-width: 700px)");

  function addLabelAccordion(size) {
      if (size.matches) {
          document.querySelector("#leftMenuTitle").setAttribute("class", "text__normal accordion2");
          document.querySelector("#leftMenuMobile").setAttribute("class", "left__menu panel");
      } else {
          document.querySelector("#leftMenuTitle").setAttribute("class", "text__normal");
          document.querySelector("#leftMenuMobile").setAttribute("class", "left__menu");
      }
  }
  addLabelAccordion(size);
  // size.addEventListener("click",addLabelAccordion);

  var acc = document.getElementsByClassName("accordion2");
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
      });
  }

	jQuery(document).ready(function($) {
        $('.slider-offers').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            slidesToScroll: 1,
          });

          $('.slider-brands').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            centerMode: true,
            infinite: true,
            slidesToShow: 7,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 480,
                settings: {
                  centerMode: true,
                  arrows: false,
                  slidesToShow: 3
                }
              }
            ]
          });

          $('.slider-landing').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            centerMode: true,
            slidesToShow: 4,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  arrows: false,
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 800,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  dots: true
                }
              }
            ]
          });
    });

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 300,
      percentPosition: true
    });

})(jQuery);

