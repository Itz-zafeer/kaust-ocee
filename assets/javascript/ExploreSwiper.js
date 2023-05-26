//   Initialize Swiper  
  
const newsGap = (window.innerWidth / 100) * 2.5;
 var swiper = new Swiper(".exploreSwiper", {
    spaceBetween: newsGap,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });