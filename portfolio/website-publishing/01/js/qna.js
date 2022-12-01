

$(function(){

$('.main-title').click(function(){
  $(this).addClass('active')
  $(this).siblings('.main-title').removeClass('active')
  $(this).siblings('.main-desc').stop().slideUp()
  $(this).next().stop().slideDown()

  var dataImage = $(this).attr('data-image')
  $('.img img').attr('src', dataImage)
})   

})