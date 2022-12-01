

    
    
    
    $(document).ready(function(){
            $(".caption i").click(function(){
              $(this).toggleClass("active");
            });




    $('.btn li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
  
        var result = $(this).attr('data-alt')
        $('.tabs>div').removeClass('active')
        $('#' + result).addClass('active')
      })
   
    



    $('#trigger').click(function(){
   $('.section-swiper').toggleClass('active')
  });
    $('#trigger').click(function(){
   $('.main-section').toggleClass('active')
  });
  
  



          });
          
  
  
  
  
