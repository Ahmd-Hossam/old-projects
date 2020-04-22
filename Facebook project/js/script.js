$(function(){

////////////////////////////////////////start  popup
$('.popup').on('click',function(){
    $(this).fadeOut();
})

$(".popup .inner").on("click",function(e){
    e.stopPropagation()
})

$(".popup .inner .close_btn").on("click",function(e){
    e.stopPropagation();
    $('.popup').fadeOut(500);
})

$(document).keydown(function(e){
    if(e.keyCode == 27){
        $('.popup').fadeOut(500).remove(); 
    }
});


$('.min').on('click',function(){
    $('.popup').fadeIn(500);
});
////////////////////////////////////////end  popup



///////////////////////////////////////stat search 
var my_place="";
$('[placeholder]').focus(function(){
    my_place=$(this).attr('placeholder');
    $(this).attr('placeholder','');
}).blur(function(){
    $(this).attr('placeholder',my_place);
});
////////////////////////////////////////end search 


////////////////////////////////////////star input mind
$('.popup .text').on('click',function(){
    $(this).fadeOut(100,function(){
        $('.min_input').fadeIn(100);
    })
})
////////////////////////////////////////end  input mind




///////////////////////////////////////stat toggle  post
    $('.min_input').on('keyup',function(){
        if($(this).val()===''){
            $('.post_now').css({
                background:'#9cb4d8'
            })
        }else{
            $('.post_now').css({
                background:'#4267b2'
            })
        }
    });
///////////////////////////////////////end toggle post



//////////////////////////////////////start toggle check
$('.toggle_icon').on('click',function(){
    $(this).toggleClass('toggle_color')
});
//////////////////////////////////////////end toggle check


});//end page 
