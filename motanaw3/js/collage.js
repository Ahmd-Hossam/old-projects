$(function (){
/*********************************** start navbar *******************/
$(window).scroll(function(){
    if($(window).scrollTop() > 10){
        $('nav').css('background','#303030');
    }else{
        $('nav').css('background','none');
    }

    $('.block').each(function(){
        if($(window).scrollTop() > $(this).offset().top-300){
            var block_id=$(this).attr(('id'));
            $('nav ul li a').removeClass('active_a');
            $('nav ul li a[data-scroll="#'+ block_id + '"]').addClass('active_a')
        }
    })
});


$('nav ul li a').on('click',function(){
    $(this).addClass('active_a').parent('li').siblings().children().removeClass('active_a')
    if($(this).hasClass('home')){
        $('html,body').animate({
            scrollTop:$($(this).data('scroll')).offset().top-200
        },1000);
    }else
    $('html,body').animate({
        scrollTop:$($(this).data('scroll')).offset().top-90
    },1000);
});



/////// start mobile
$('.bars').on('click',function(){
    $('nav .list').slideToggle();
})
/////// end mobile
/*********************************** end navbar *******************/


/*********************************** start header  *******************/
$('.form_button').on('click',function(){
    $('body,html').animate({
        scrollTop:$($(this).data('form')).offset().top-120
    },1000)
})
/***********************************  end header  *******************/




/*********************************** start features  *******************/
var costum=0;
$('.features .item').each(function(){
    if($(this).height() >  costum){
        costum=$(this).height();
    }
});
$('.features .item').css({
    height:costum,
    paddingBottom:'30px'
})
/*********************************** end features *********************/




/****************************** start opinion  slider******************/
$("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
});
  /**************************** end opinion slider *********************/




// start carousel tistimonuals 
$('.carousel').carousel({
    interval: 3000
})

var costum2=0;
$('.tisti .item').each(function(){
    if($(this).height() >  costum2){
        costum2=$(this).height();
    }
});
$('.tisti .item').css('height',costum2)
// end carousel tistimonuals



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






/*start nice scroll
$("html").niceScroll({
    horizrailenabled:false, 
    cursorcolor:"#f80",
    cursorwidth:"4px",
    cursorborder:'none',
    emulatetouch: true,
    cursordragontouch: true,
    touchbehavior: true,
    grabcursorenabled: true,
});
end nice scroll */


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













/******************************************************** start computer ************************************* */


//////// start mixing 
    $('.all_titles .item').on('click',function(){
        $('.all_titles .item').removeClass('active_item');
        $(this).addClass('active_item');
    })
    var mixer = mixitup('.first_container_imgs');
    var mixer = mixitup('.second_container_imgs');
   /* mixer.filter('.category-a'); if i want to  hidden all */  
//////// end mixing 




/******************************************************* end computer ****************************************** */

}); // end page 


//start loading
$(window).on('load',function(){
    $('.loading_overlay').fadeOut(1000);
    $('body').css('overflow','auto');
});
  //end loading


