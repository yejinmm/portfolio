$(function(){
    $('.tab1').click(function(){
        $('.card2').css('display','none')
        $('.card1').css('display','block')
    });


    $('.pagination>a').click(function(){
        $('.card1').css('display','none')
        $('.card2').css('display','block')
    });





});