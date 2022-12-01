$(function(){

  $('.navbar_menu>li').mouseover(function(){
 $(this).children('.menu-dropdown').stop().show(); 

});

$('.menu-dropdown, .navbar_menu>li').mouseout(function(){
 $('.menu-dropdown').stop().hide(); 

});


$('.icon').click(function(){
 $('.search').toggleClass('active')
});
$('.clear').click(function(){
 $('#searchInput').val('')
});
$('section').click(function(){
 $('.search').removeClass('active')
});
$('.sub-menu-mo-title').click(function(){
  $(this).toggleClass('active')
 });



$('.title-sub').click(function(){
 $(this).addClass('active')
 $(this).siblings('.title-sub').removeClass('active')
 $(this).siblings('.desc').stop().slideUp()
 $(this).next().stop().slideDown()
});



$('.title').click(function(){
 $('.sub-navi').slideToggle()
 $(this).toggleClass('active')
});
$('.sub-navi li').click(function(){
 var link = $(this).text();
 $(this).parent().slideUp()
 $('.title').text(link)
});



$('.sweetspace').click(function(){
 $('.sweet-text').slideToggle()
 $(this).toggleClass('active')


});



$('.sub-menu-mo-title').click(function(){
  $(this).children('div').slideToggle(); 
  $(this).nextAll().children('div').hide(); 
  $(this).prevAll().children('div').hide();  
});

$('.sub-menu-mo-title').click(function(){
  $(this).children('i').toggleClass('active'); 
  $(this).siblings('.sub-menu-mo-title').children('i').removeClass('active')
 });


 $('#bt').click(function(){
  $('.sub-menu-mo').css('right','0px'); 
});
$('#close').click(function(){
  $('.sub-menu-mo').css('right','-100%'); 
});
$('#close').click(function(){
  $('.sub-menu-mo-title').children('i').removeClass('active'); 
});
$('#close').click(function(){
  $('.sub-menu-mo-title').children('div').hide(); 
});

}) ;



