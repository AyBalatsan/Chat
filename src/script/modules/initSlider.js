import Swiper from 'swiper/bundle';


export default function initSlider(){    



let widthWin = window.outerWidth;
if(widthWin <= 768){  
  const collectivesSwiper = new Swiper('.collectives__slider', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
  });
    const serviceSwiper = new Swiper('.service__slider', {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
    });
    const fundSwiper = new Swiper('.fund__slider', {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
    });
    const partnersSwiper = new Swiper('.partners__slider', {
      slidesPerView: 4,
      loop: false,
      speed: 1000,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
    });
  }
  const previewSwiper = new Swiper('.preview__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 10,
    speed: 1000,
    pagination: {
      el: '.preview__pagitation',
      bulletClass: "pagination__item",
      bulletActiveClass: "pagination__item--active",
      clickable: true,  
    },
  });
  const posterSwiper = new Swiper('.poster__swiper', {
    loop: false,    
    slidesPerView: 3,
    spaceBetween: 33,
    pagination: {
      el: '.pagination',
      bulletClass: "pagination__item",
      bulletActiveClass: "pagination__item--active",
      clickable: true,  
    },    
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1120: {
        slidesPerView: 3,
        
      }
    }
  });
}