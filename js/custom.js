$(document).ready(function(){

   // scroll position
   $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance 
    if(scrolling > 100){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();  
    }
    // navbar class 
    if(scrolling > 150){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

    });

    // back to top action 
    $('.back-to-top').on('click',function(){
      $('html,body').animate({
      scrollTop: '0px',
    },2000);

    });

    //spin-image tilt js
    const tilt = $('.js-tilt').tilt();
   
    
    // js for accordion item
    $('.accordion-item').on('click',function(){
       $(this).addClass('border').siblings().removeClass('border');
    })

    //color-picker
    $('.color-picker .color-btn').on('click',function(){
        $('.color-picker').toggleClass('color-pos');
    });

    //color-picker addlass to remove class starts
    $('.color-picker .orange').on('click',function(){
        $('body').addClass('orange').removeClass('red').removeClass('pink').removeClass('green').removeClass('sky').removeClass('yellow').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .red').on('click',function(){
        $('body').addClass('red').removeClass('orange').removeClass('pink').removeClass('green').removeClass('sky').removeClass('yellow').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .pink').on('click',function(){
        $('body').addClass('pink').removeClass('orange').removeClass('red').removeClass('green').removeClass('sky').removeClass('yellow').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .green').on('click',function(){
        $('body').addClass('green').removeClass('orange').removeClass('red').removeClass('pink').removeClass('sky').removeClass('yellow').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .sky').on('click',function(){
        $('body').addClass('sky').removeClass('orange').removeClass('red').removeClass('green').removeClass('pink').removeClass('yellow').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .yellow').on('click',function(){
        $('body').addClass('yellow').removeClass('orange').removeClass('red').removeClass('green').removeClass('pink').removeClass('sky').removeClass('violet').removeClass('blue');
    });

    $('.color-picker .violet').on('click',function(){
        $('body').addClass('violet').removeClass('orange').removeClass('red').removeClass('green').removeClass('pink').removeClass('yellow').removeClass('sky').removeClass('blue');
    });

    $('.color-picker .blue').on('click',function(){
        $('body').addClass('blue').removeClass('orange').removeClass('red').removeClass('green').removeClass('pink').removeClass('yellow').removeClass('violet').removeClass('sky');
    });

    $('.color-picker .default').on('click',function(){
        $('body').removeClass('orange').removeClass('red').removeClass('green').removeClass('pink').removeClass('yellow').removeClass('violet').removeClass('sky').removeClass('blue');
    });
    //color-picker addlass to remove class ends

    //preloader
    $('.preloader').delay(3000).fadeOut();
    
    //game slider
    $('.game-slider').slick({
        slidesToShow: 2,
    });


    //ask slider
    // $('.ask-slider').slick({
    //     arros:true,
    //     slidesToShow: 2,
    //     autoplay: true,
    // });

});