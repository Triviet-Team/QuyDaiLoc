$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: [
    "<i class='mdi mdi-arrow-left'></i>", 
    "<i class='mdi mdi-arrow-right'></i>"
  ],
  autoplaySpeed: 1000,
});

// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});



$('.construction-carousel').owlCarousel({
  loop: true,
  autoplayTimeout: 3000,
  autoplay: true,
  dots: false,
  nav: true,
  items: 3,
  margin: 30,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,
  navText: [
    "<i class='mdi mdi-arrow-left'></i>", 
    "<i class='mdi mdi-arrow-right'></i>"
  ],
  responsive : {
    0 : {
      items: 1,
    },
    575 : {
      items: 1
    },
    992 : {
      items: 2, 
    },
  }
});



// ANIMATION
wow = new WOW(
  {
  mobile: false,
  }
)
wow.init();
$('.wow').attr('data-wow-duration','.5s')


$(document).ready(() => {
  const ww = document.body.clientWidth;
  const url = window.location.href;


  // GO TOP
  let iScrollPos = 0; 
  $(window).scroll(function () {
    let iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos < iScrollPos) {
      $('.go-top')
        .fadeIn()
        .css('transform','scale(1)');

    } else {
      $('.go-top')
        .fadeOut()
        .css('transform','scale(0)');

      $('.cart').removeClass('cart-out');
      $('.overlay-menu').removeClass('overlay-in');
      $('.overlay').removeClass('overlay-in');

      $('.nav').removeClass('out');
      $('.search-form').removeClass('active');
      $('.search-btn i').addClass('mdi-magnify').removeClass('mdi-close');
    }
    iScrollPos = iCurScrollPos;
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  if (ww < 1200) {
    let menuParent = $('.menu-down').parent();

    menuParent.find('.nav-link').removeAttr('href');
    
    $(menuParent).click(() => {
      $('.menu-down').addClass('out');
    });

    $('.menu-down:after').click(() => {
      $('.menu-down').removeClass('out');
    })
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 1) {
      $('.menu, .menu-down').addClass('down');
      
    } else {
      $('.menu, .menu-down').removeClass('down');
    }
  });



  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });
  
  $('.overlay, .cart-close, .filter-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
    $('.left').removeClass('left-out');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  $('.search-btn').click(function() {
    $('.search-btn i').toggleClass('mdi-magnify mdi-close')
    $('.search-form').toggleClass('active');
    $('.search-form input').focus();
  });


  $(".menu a").each( function () {
    if (url == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });

  $('.type-list').click(function() {
    $('.main-product').addClass('main-product-list');
    $(this).addClass('active');
    $('.type-grid').removeClass('active');
  });

  $('.type-grid').click(function() {
    $('.main-product').removeClass('main-product-list');
    $(this).addClass('active');
    $('.type-list').removeClass('active');
  });

  $('.filter-btn').click(() => {
    $('.left').addClass('left-out');
    $('.overlay').addClass('overlay-in');
  });

  for (let item = 0; item < 6; item++) {
    $('.box-category').eq(`${item}`).addClass(`cate-${item}`).attr('data-wow-delay', `0.${item}`*2 + `s`);
  }
  
});
