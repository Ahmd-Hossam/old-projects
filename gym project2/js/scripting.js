$(function (){

/****************************************  start navbar  ****************************************/
  $(window).scroll(function(){
    if($(this).scrollTop()> 0){
      $('nav').css('background','linear-gradient(90deg, #19232c, #757171)');
      $('.logo a').css('color','#f1f1f1');
      $('nav .list li a').css('color','#f1f1f1');
      $('.bar').css('color','#f1f1f1');
    }else{
      $('nav').css('background','#f6f6f6');
      $('.logo a').css('color','#222');
      $('nav .list li a').css('color','#686868');
      $('.bar').css('color','#222');
    }
  });


  $('.bar').on('click',function(){
    $('nav .list').slideToggle();
  });
/****************************************  end vavbar    ****************************************/



/****************************************  start header ****************************************/
  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1800,
      delay: (el, i) => 45 * i
    });
  // end fitness 
  // start p 
  var textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
      }).add({
        targets: '.ml7',
        duration: 1000,
        easing: "easeOutExpo",
    });
  // end p

  // start go to form
  $('.form_button').on('click',function(){
    $('body,html').animate({
      scrollTop:$($(this).data('form')).offset().top-110
    },1000)
  })
  // end go to form
/****************************************  end header ****************************************/



/****************************************  start opinion  slider  ***************************/
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
/**************************************** end opinion slider *******************************/



/**************************************** start go to section *******************************/
  $('.list li a').on('click',function(){
    $('body,html').animate({
      scrollTop:$($(this).data('scroll')).offset().top-65
    },1000);
  })
/**************************************** end go to section    *****************************/



/**************************************** start go to up    ********************************/
  $(window).on('scroll',function(){
    if($('body,html').scrollTop() > 1500){
      $('.go_up').fadeIn(500);
    }else{
      $('.go_up').fadeOut(500)
    }
  });
  $('.go_up').on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },1000)
  })
/**************************************** end go to up   ********************************/


//start nicescroll 
$("html").niceScroll({
  horizrailenabled:false, 
  cursorcolor:"#f80",
  cursorwidth:"4px",
  cursorborder:'none',
  emulatetouch: true,
  cursordragontouch: true,
  touchbehavior: true,
  grabcursorenabled: true,
  cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
  cursoropacitymax: 1,
  zindex:[9999],
  bouncescroll:true,
  scrollspeed: 1
});
//end nicescroll 

}); // end page 





