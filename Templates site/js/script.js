$(function (){
    // start navbar 
    $('.humburger_button').on('click',function(){
        $('.navbar').toggleClass('switch');
        $('.L_one').toggleClass('first');
        $('.L_two').toggleClass('second');
        $('.L_three').toggleClass('third');
        $('.navbar').slideToggle();
    });
    //end navbar

    //start active class
    $('.navbar li ').on('click',function(){
        $(this).addClass('active_li').siblings().removeClass('active_li');
        $('.navbar li a').addClass('active_a').parent('li').siblings().children("a").removeClass('active_a');
    });


    $('.navbar li a').on('click',function(){
        $(this).addClass('active_a').parent('li').siblings().children("a").removeClass('active_a');
    });
    //end active class
    



    //start overlay templats 
    $('.our_tempalts .services_box .cont_img').hover(function(){
        $(this).children('.overlay').children('.show').css('display','inline');
        $(this).children('.overlay').fadeIn(500)
    },function(){
        $(this).children('.overlay').children('.show').css('display','none');
            $('.cont_img .overlay').fadeOut(300)
    });

    $('.show').on('click',function(){
        $(this).parent('.overlay').parent('.cont_img').siblings('.big_img').fadeIn(600);
    });
    //end overlay templats



    // start close botton
    $('.close').on('click',function(){
        $(this).parent('.big_img').fadeOut(600);
    })
    // end close botton




    //start arrow
    $('.disc_more').hover(function(){
        $(this).children('.fa-arrow-right').animate({left:"10px"},500);
    },function(){
        $(this).children('.fa-arrow-right').animate({left:"5px"},500);
    });
    //end arrow 

    //start  arabic  arrow
    $('.disc_more').hover(function(){
        $(this).children('.fa-arrow-left').animate({right:"10px"},500);
    },function(){
        $(this).children('.fa-arrow-left').animate({right:"5px"},500);
    });
    //end arabic  arrow 



    // start footer 
    var storg="";
    $(".part_three form input,textarea").focus(function(){
        $(this).css({boxShadow:"0 0 2px 1px #fff"});
        storg=$(this).attr('placeholder');
        $(this).attr('placeholder',"");
    });
    $(".part_three form input,textarea").blur(function(){
        $(this).css({boxShadow:"none"});
        $(this).attr('placeholder',storg);
    });
    // end footer
    
    



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


//start nicescroll
$("html").niceScroll({
    horizrailenabled:false, 
    cursorcolor:"#79A63D",
    cursorwidth:"4px",
    cursorborder:'none',
    emulatetouch: true,
    cursordragontouch: true,
    touchbehavior: true,
    grabcursorenabled: true,
});
//end nicescroll

});//end page