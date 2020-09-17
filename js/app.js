// var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     // direction: 'vertical',
//     // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//     loop: true,
//   })


  $('.owl-carousel1').owlCarousel({
    loop:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.owl-carousel2').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
  })

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:true
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})



// mobile menu

let toggler = document.querySelectorAll('.toggle');
let menu = document.querySelector('.mobile__menu');

toggler.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})

