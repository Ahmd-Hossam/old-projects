$(function(){
//start slideToggle of nav bar 
$('.bars i').on('click',function(){
    $('.list').slideToggle();
});
//ens slideToggle of nav bar 



//start scrolling  and backgroung navbar 
$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('nav').addClass('wihte_background');
        $('nav').css('paddingTop','5px'),
        $('nav').css('paddingBottom','15px')
    }
    if($(this).scrollTop()===0){
        $('nav').removeClass('wihte_background');
        $('nav').css({
            paddingTop:'0',
            paddingBottom:'0',
            webkitTransition:'all .5s linear',
            mozTransition:'all .5s linear',
            Transition:'all .5s linear',
        })
    }
})
// end scrolling backgroung navbar 


// start go to section and active color 
$('.list li a').on('click',function(){
    $(this).addClass('active_a').parent('li').siblings().children('a').removeClass('active_a');
    $('body,html').animate({
        scrollTop:$($(this).data('scroll')).offset().top
    },1000)
});
// end go to section and avtive color 
//start companys slid
var owl = $("#owl-demo");
owl.owlCarousel({
    items : 5, //5 items min-width 1000px and browser width
    itemsDesktop : [1000,4], //4 items between  901px and 1000px
    itemsDesktopSmall : [900,3], // betweem 601px and 900px  
    itemsTablet: [600,2], //2 items between 0 and  600
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});
owl.trigger('owl.play',1000);// auto work

/* Custom Navigation Events
$(".next").click(function(){
  owl.trigger('owl.next');
})
$(".prev").click(function(){
  owl.trigger('owl.prev');
})
$(".play").click(function(){
  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
})
$(".stop").click(function(){
  owl.trigger('owl.stop');
})*/
//end companys slid







//start input placeholder 
var stor='';
$('form input[type="text"]').on('focus',function(){
    stor=$(this).attr('placeholder');
    $(this).attr('placeholder','');

});
$('form input[type="text"]').on('blur',function(){
    $(this).attr('placeholder',stor);
});
//end input placeholder



//start plan hover
$('.plan').hover(function(){
    $(this).addClass('active_shadow').parent().siblings().children().removeClass('active_shadow');
})
//end plan hover




//start nice scroll
$("html").niceScroll({
    horizrailenabled:false, 
    cursorcolor:"#1EB858",
    cursorwidth:"4px",
    cursorborder:'none',
    emulatetouch: true,
    cursordragontouch: true,
    touchbehavior: true,
    grabcursorenabled: true,
});
//end nice scroll




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
});//end page



// start carousel tistimonuals 
$('.carousel').carousel({
    interval: 1500
});

// end carousel tistimonuals