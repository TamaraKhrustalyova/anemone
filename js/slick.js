$('.responsive').slick({
    // dots: true,
    prevArrow: '<button type="button" class="my-slick-prev"><svg class="slick_arrow"><use href="/images/svg/icons.svg#icon-arrow_left"></use></svg></button>',
    nextArrow: '<button type="button" class="my-slick-next"><svg class="slick_arrow"><use href="/images/svg/icons.svg#icon-arrow_right"></use></svg></button>',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: 3,
    variableWidth: true, 
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });