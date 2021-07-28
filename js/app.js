


$('.trending-product-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: true,
    arrows: true,
        prevArrow: `<span class="logo-left"><i class="fas fa-chevron-left"></i></span>`,
    nextArrow: `<span class="logo-right"><i class="fas fa-chevron-right"></i></span>`,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true
              }
    },
    {
    breakpoint: 768,
    settings: {
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true
              }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    draggable: true,
    slidesToScroll: 2
              }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    draggable: true,
    slidesToScroll: 1
              }
    }

              ]
              });

  jQuery(document).ready(function ($) {
    $('.hero').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      draggable: false,
      arrows: false,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
                }
      },
      {
      breakpoint: 768,
      settings: {
      draggable: true,
                }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      },
      {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      }
  
                ]
                });
      });
      
 
        

      
  
(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
})(jQuery);