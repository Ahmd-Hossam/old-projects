$(function(){
      // start navbar 
    $('.humburger_button').on('click',function(){
        $('.ul_navbar').toggleClass('switch');
        $('.L_one').toggleClass('first');
        $('.L_two').toggleClass('second');
        $('.L_three').toggleClass('third');
        $('.ul_navbar').slideToggle();
    });
    if($('body').width() > 768){
        $('.ul_navbar').fadeIn();
    }
//end navbar



//start active class
    $('.ul_navbar li').on('click',function(){
        $(this).addClass('active_li').siblings().removeClass('active_li');
    });
//end active class


// start scroll to top  
$(window).on('scroll',function(){
    if($(this).scrollTop()>2000){
        $('.scroll_top').fadeIn(1000);
    }else{
        $('.scroll_top').fadeOut(1000);
    }
});
$(".scroll_top").on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },2000)
});
// end scroll to top  


// start nicescroll
    $("html").niceScroll({
        horizrailenabled:false, // to delate the bottom scroll
        cursorcolor:"#635ae6",
        cursorwidth:"4px",
        cursorborder:'none',
        emulatetouch: true,
        cursordragontouch: true,
        touchbehavior: true,
        grabcursorenabled: true,
    });
// end nicescroll 
});



//start loading
$(window).on('load',function(){
    $('.loading_overlay').delay(5000).fadeOut(1000);
});
//end loading