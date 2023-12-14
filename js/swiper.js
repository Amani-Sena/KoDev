var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 130,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 3,
            spaceBetween: 80, 
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 200,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 160,
        },
        1280: {
            slidesPerView: 7,
            spaceBetween: 96,
        },
        1600: {
            slidesPerView: 7,
            spaceBetween: 120,
        },
        1920: {
            slidesPerView: 8,
            spaceBetween: 120,
        },
      },
  });