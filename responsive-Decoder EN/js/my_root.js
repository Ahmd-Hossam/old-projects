$(function (){

    // start niceScroll
    $("body").niceScroll({
        horizrailenabled:false, // to delate the bottom scroll
        cursorcolor:"#575a89",
        cursorwidth:"4px",
        cursorborder:'none',
    });
    //end niceScroll


    //start active title 
    $('.list li').on('click',function(){
        $(this).addClass('active_title').siblings().removeClass('active_title');
        $('.title_span').html($(this).data('title'));
        $('.main_code').html($(this).data('code'));
        $('.oposite').html($(this).data('decode'))
    })
    //end active title 

    // start active code 
    $('.list1 li').on('click',function(){
        $(this).addClass('active_code').siblings().removeClass('active_code');

        if($('.main_code').hasClass('active_code')){
            $('.intro').html('Enter The Text To Coding');
            $('.outro').html('The Code Is ');
        }
        if($('.oposite').hasClass('active_code')){
            $('.intro').html('Enter The Code');
            $('.outro').html('The Text ');
        }
    })
    // end active code 



/***********start on keyup ************************************************/
    $('.inp').on('keyup',function(ev){
        var key=ev.keyCode || ev.wich;//convert to charCode
        var b;
//start rot 
        if($('.rot').hasClass('active_title')){
            if(key > 77){//(78) it is (n) becouse (78+13=91) and (z=90) in the unicode && i am started from 65
                b=key-13;
            }else{ 
                b=key+13; // from 65 to 78 
            }
        }
//end rot 

//start Caesar 
        if($('.Caesar').hasClass('active_title') && $('.main_code').hasClass('active_code')){
            if(key > 87){// اخرك 87 عشان 87+3=90 منفغش تزيد عن 90 زد
                b=key-23;// لو وصل 87 انزل 23 حرف يعني هيكون زايد 3 اللي هو المطلوب 
            }else{ 
                b=key+3;  // غير كده شغال زود 3
            }
        }
                        //oposite
        if($('.Caesar').hasClass('active_title') && $('.oposite').hasClass('active_code')){
            if(key <=68 ){//  لو هيا الاه    او    البي    او   السي 
                b=key+23; // زود 23 عشان لو زودت 26 هيعدي 90 
            }else{ 
                b=key-3;
            }
        }
// end Caesar 

//start At_bash 
if($('.At_bash').hasClass('active_title') && $('.main_code').hasClass('active_code')){
    if(key == 65 ){b=90}
    if(key == 66 ){b=89}
    if(key == 67 ){b=88}
    if(key == 68 ){b=87}
    if(key == 69 ){b=86}
    if(key == 70 ){b=85}
    if(key == 71 ){b=84}
    if(key == 72 ){b=83}
    if(key == 73 ){b=82}
    if(key == 74 ){b=81}
    if(key == 75 ){b=80}
    if(key == 76 ){b=79}
    if(key == 77 ){b=78}
    if(key == 78 ){b=77}
    if(key == 79 ){b=76}
    if(key == 80 ){b=75}
    if(key == 81 ){b=74}
    if(key == 82 ){b=73}
    if(key == 83 ){b=72}
    if(key == 84 ){b=71}
    if(key == 85 ){b=70}
    if(key == 86 ){b=69}
    if(key == 87 ){b=68}
    if(key == 88 ){b=67}
    if(key == 89 ){b=66}
    if(key == 90 ){b=65}
}
                //oposite
if($('.At_bash').hasClass('active_title') && $('.oposite').hasClass('active_code')){
    if(key == 90 ){b=65}
    if(key == 89 ){b=66}
    if(key == 88 ){b=67}
    if(key == 87 ){b=68}
    if(key == 86 ){b=69}
    if(key == 85 ){b=70}
    if(key == 84 ){b=71}
    if(key == 83 ){b=72}
    if(key == 82 ){b=73}
    if(key == 81 ){b=74}
    if(key == 80 ){b=75}
    if(key == 79 ){b=76}
    if(key == 78 ){b=77}
    if(key == 77 ){b=78}
    if(key == 76 ){b=79}
    if(key == 75 ){b=80}
    if(key == 74 ){b=81}
    if(key == 73 ){b=82}
    if(key == 72 ){b=83}
    if(key == 71 ){b=84}
    if(key == 70 ){b=85}
    if(key == 69 ){b=86}
    if(key == 68 ){b=87}
    if(key == 67 ){b=88}
    if(key == 66 ){b=89}
    if(key == 65 ){b=90}
}
// end at_sash



        var a=String.fromCharCode(b);//convert to string 
        function me(){
            $('.out2').append('<span class="my_result">'+ a +'</span>');
        }
        

        if(key === 8 ){//clear >>>> backspac
            $('.inp').css({color:"#000",textAlign:"left"});//عشان انا عمله احمر وتكست سنتر تحت لو كتب عربي او حروف
                $('.out2 ').children('.my_result:last-of-type').remove();//لو ضغط علي الباك سبيس مش يشغل الفنكشن عشان مش يضيف سبان ويمسح اخر واحده
        }else{// غير كده شغل  الفنكشن عادي وضيف سبان
            me(); 
        }

        if(key === 13){ //when we inter the enter dont print it in the out 
            $('.out2 ').children('.my_result:last-of-type').remove();
        }

        



////////////////////////////////////////start error popup
$('.popup').on('click',function(){
    $(this).fadeOut();
    $('.show_pop').fadeIn()
})

$(".popup .inner").on("click",function(e){
    e.stopPropagation()// عشان مش يخفي اللي جوه
})

$(".popup .inner .close_btn").on("click",function(e){//  زار الاخفاء 
    e.stopPropagation();
    $(this).parentsUntil('.popup').parent().fadeOut(500);
    $('.show_pop').fadeIn()
})

$(document).keydown(function(e){// زرار السكيب
    if(e.keyCode == 27){
        $('.popup').fadeOut(500).remove();           //لو عاوز الايرور تظهر مره واحد فقط اعملها ريموف بعد الفايد اوت
    }
});

function error(){ // متظهرش البوب الا لما تشغل الفنكشن دي 
    $('.popup').each(function(){
            $(this).fadeIn(500);
    })
}

//  grater than 90        space                       CAPS LOCK                   enter                   backspace 
if( key >90   ||  key < 65 && key > 32    ||    key < 32 && key > 20    ||    key<20 && key>13   ||  key<13 && key > 8 ){// its  diffrant bettwen keycode and charCoede
    $('.inp').val('').css({color:"red",textAlign:'center'});
    $('.out2').html('');
    error();// شغلها في حاله انه لو ضغط علي اي زرار من دول
}
/////////////////////////////////////////////////////////////////////end error popup



        if(key==20){ // CAPS LOCK  key 
            $('.out2').html('');
        }

        if(key==13){ // print resut by enter key 
            if($('.inp').val()===""){
                $(".my_area").html('')
            }else{
                $(".my_area").append(//after the element 
                    "<span class='append_span'>"+  //append spane in the table
                        $('.inp').val()+ // the input
                        '<i class="fas fa-equals">'+'</i>'+// equal icon
                        $('.out2').html()+// out put 
                    "</span>").append(//after the element 
                        "<span class='my_icon'>"+ 
                            '<i class="fas fa-times"></i>'+// times icom
                        "</span>"+
                        "<br>");// break line 
            }
        }


        if($('.inp').val().charCodeAt(0)>200){// english end in 122 arbic start 1200
            $('.inp').val('').css({color:"red",textAlign:'center'});
            $('.out2').html('');
            error();
        }
    });

// end on keyup









//start print result 
$('.print').on('click',function(){
    if($('.inp').val()===""){
        $(".my_area").html('')
    }else{
        $(".my_area").append(//after the element 
            "<span class='append_span'>"+  //append spane in the table
                $('.inp').val()+ // the input
                '<i class="fas fa-equals">'+'</i>'+// equal icon
                $('.out2').html()+// out put 
            "</span>").append(//after the element 
                "<span class='my_icon'>"+ 
                    '<i class="fas fa-times"></i>'+// times icom
                "</span>"+
                "<br>");// break line 
        }
});
// end print result 

// start times icon 
$('.my_area').on('click','.my_icon',function(){
    $(this).prev('.append_span').fadeOut(1000).remove(); // remove the prev span 
    $(this).next('br').fadeOut(1000).remove();//remove the space to start from the top 
    $(this).fadeOut(1000).remove();// remove this to clear the table 
});
// end times icon


//start clear button
$('.clear').on('click',function(){
    $('.inp').val('');
    $('.out2').html('');
    $('.show_input').children('span').remove();
});
//end clear button



//start show table 
$('.show').on('click',function(){
    $('.table_container').toggleClass('switch');
    if( $('.table_container').hasClass('switch')){
        $('.table_container').animate({
            left:50+"%",
            marginLeft:"-450px"
        },1000);
        $(this).html('Hide table')
    }else{
        $('.table_container').animate({
            left:'-890px'
        },1000);
        $(this).html('Show table')
    }
})



//start cleae rea
$('.claer_area').on('click',function(){
    $('.my_area').html('');
})
// end clear area
//end show table 

}); // end page 





//start overlay loading 
$(window).on('load',function(){
    $('.overlay').fadeOut(1000,function(){
            // start convert your code
                var txt="Convert Your Code In A Second";
                var sum=txt.length;
                var count=0;
                var st=setInterval(function(){
                    $('.con').each(function(){
                        $(this).html($(this).html()+txt[count]);
                    });
                    count++;
                    if(count == sum){
                        clearInterval(st)
                    }
                },100)
                //end conver your code
    });
})
//end overlay loading 
