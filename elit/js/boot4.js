$(function(){
var top_nav=$('.top_nav').innerHeight(),
    main_nav=$('.navbar').innerHeight(),
    wind  =$(window).height();
    $('.slider, .carousel-item').height(wind - (top_nav  + main_nav)  );


    $('.featured ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.imgs_container .row > div img').css('opacity',1);
        }else{
            $('.imgs_container .row > div img').css('opacity','.069');
            $($(this).data('class')).children().css('opacity',1);
        };
    });



    
// start scroll to top  
$(window).on('scroll',function(){
    if($(this).scrollTop()>3000){
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
});