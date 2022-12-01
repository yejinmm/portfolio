$ (function (){
    $('.open-navi').click(function(){
        $(this).addClass('active')
        $('.close-navi').addClass('active')
        $('.front').fadeOut()
        $('.back').fadeIn()
      })
      $('.close-navi').click(function(){
        $(this).removeClass('active')
        $('.open-navi').removeClass('active')
        $('.back').fadeOut()
        $('.front').fadeIn()
      })
})



$(function () {

  const ani = $('.ani');
  
  // header  load scroll
  $(window).on('load scroll',function(){
    const header = $('header');
    const visuHeight = $('.visual ').outerHeight();
    const h_Height=header.outerHeight();
    const scrollTop= $(window).scrollTop();
    const visual = $('.visual');
  
  
    header.addClass('load');
    visual.addClass('down');
     
    $(window).scroll(function() {   
      if ($(this).scrollTop() > 200) {      
          $('header').addClass('down'); }  
       
       else {    
          $('header').removeClass('down');
       }
      });
  })
  })
  
