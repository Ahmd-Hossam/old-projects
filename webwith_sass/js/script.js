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
    $('.navbar li').on('click',function(){
        $(this).addClass('active_li').siblings().removeClass('active_li');
    });
    //end active class
});//end page