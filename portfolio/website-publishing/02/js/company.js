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