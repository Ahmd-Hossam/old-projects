///////////////////////start page 
$(function(){
// start turn on the slider 
    $('.carousel').carousel({
        interval:2000
    })
// end trun on the slider 




// start change color 
$('.change_color ul li').on("click",function(){
    $('body').attr("data-main",$(this).data('color'))
})  


$('.btn_change').on("click",function(){
    $('.change_color').toggleClass('change');
    if($('.change_color').hasClass('change')){
        $('.change_color').animate({
            left:15
        },500)
    }else{
        $('.change_color').animate({
            left:-30
        },500)
    }

})
// end change color 




// start scroll to top  
$(window).on('scroll',function(){
    if($(this).scrollTop()>1000){
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





// start niceScroll 
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
// end niceScroll 





// start go to sections
$('.dropdown-menu  li a,.con a').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).data('scroll')).offset().top-50
    },1000);
});
// end go to sections

});////////////////////////////////////////////////// end page 







//start loading
$(window).on('load',function(){
    $('.loading_overlay').fadeOut(1000);
});
//end loading