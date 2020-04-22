/*
$(document).ready(function(){

    //write code in here 
});
*/


$(function(){
////////////////////////////start navbar 
    $('.lists li a').on('click',function(){
        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
    });
//////////////////////////////end navbar
/////////////////////////////start header 
    $('header').height($(window).height());

    $(window).resize(function(){
        $('header').height($(window).height());
        $(' header .bx-wrapper').each(function(){// resize slider 
            $(this).css("marginTop",($(window).height()-$('.bx-viewport').height())/2)
        });
    });
////////////////////////////////end header


///////////////////////// start slider header 
$('.slider').bxSlider({
    pager:false
});

$(' header .bx-wrapper').each(function(){
    $(this).css("marginTop",($(window).height()-$('.bx-viewport').height())/2)
});
///////////////////////// end slider header 




/////////////////////////////start  scrolle

$('.lists li a').on('click',function(){
    if($('.humburger').hasClass('show')){
        $(".lists").animate({
            right:"-450px"
        },1000)
    }else{
        $(".lists").animate({
            right:"-55"
        },1000)
    }
    $("html").animate({
        scrollTop:$($(this).data('scroll')).offset().top
    },2000) 
});
///////////////////////////////////end  scrolle







///////////////////////////////////start OUR TEAM imgs cover  
$('.our_team .container_imgsss .container_img img').hover(function(){
    $(this).parent('.container_img').children('.cov').fadeIn(500).parent('.container_img').siblings().children('.cov').fadeOut();
});
// end OUR TEAM imgs cover 

// start people says الكلاس عشان اقوله ان اللي بعد الاكتف بس لو مفيش كلاس اكتف هيجيب كل االلي بعده ويطظهرهم 
(function repeat(){
    $('.slid .active').each(function(){
        if(!$(this).is(':last-child')){
            $(this).delay(2000).fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn(500);
                repeat();
            });
        } else{
            $(this).delay(2000).fadeOut(1000,function(){
                $(this).removeClass('active');
                $('.slid div').eq(0).addClass('active').fadeIn(500);
                repeat();
            });
        }
    });
}());
////////////////////////////////////////////////////////////end people says 






///////////////////////////////////////////////////////////////start portfolio 
$('.portofolio ul li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})
var mixer = mixitup('.container_imgs');
/*mixer.filter('.category-a'); لو عايزهم يختفو بس يظهروا مع اول ضغط */
/////////////////////////////////////////////////////////////////end portfolio




//////////////////////////////////////////////////////////////start nice scroll
$('html').niceScroll({
    cursorcolor:"#1abc9c",
    cursorborderradius:'3px',
    cursorborder:'none',
    cursorwidth:'4px'
});
//////////////////////////////////////////////////////////////////end nice scroll*/




/////////////////////////////////////////////////////////////////// start scroll to top 
$('.up i').on('click',function(){
    $('html').animate({
        scrollTop:0
    },2000);
    
});
$(window).on('scroll',function(){
    if($(this).scrollTop() > 1000){
        $('.up').fadeIn(500)
    }else{
        $('.up').fadeOut(500)
    }
})
///////////////////////////////////////////////////////////////////  end scroll to top 




//////////////////////////////////////////////////////////////////////////////////////////start responsiv 
//start header 
$('.humburger').on('click',function(){
/* $(this).toggleClass('change');   تغير الكلوز*/
    $(this).toggleClass('show');
    $('.lists li').toggleClass('act');
    $('.slider').toggleClass('opacity_slider')
    
    if($(this).hasClass('show')){
        $(".lists").animate({
            right:"-55"
        },1000)
    }else{
        $(".lists").animate({
            right:"-450px"
        },1000)
    }
});
//end header 
//start our team img height 
//end our team img height 
///////////////////////////////////////////////////////////////////////////////////////////end responsiv

});// end page

