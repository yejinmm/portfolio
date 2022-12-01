$(function () {

    const ani = $('.ani');

    // header  load scroll
    $(window).on('load scroll',function(){
        const header = $('header');
        const visuHeight = $('.visual ').outerHeight();
   
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
});

$(function () {

    // header  load scroll
    $(window).on('load scroll',function(){
        const header = $('header');
        const h_Height=header.outerHeight();
        const scrollTop= $(window).scrollTop();
        header.addClass('load');

       
        $(window).scroll(function() {   
            if ($(this).scrollTop() > 200) {      
                  $('header').addClass('down'); }  
             
             else {    
                  $('header').removeClass('down');
             }
          });
    })
});


$ (function() {
    // allmenu
    allMenu();
    visual();

    function visual(){
        const visuSlider = $('.visual .visual_slider li');
        const visuNav = $('.visu_nav li');
        const visuLength =visuSlider.length-1;


        // console.log(visuLength);


        first();
        setInterval(slideEvent,5000)
        // slideEvent();

        function first(){

            visuSlider.eq(0).addClass('On');
            visuNav.eq(0).addClass('active');
        }
        


        function slideEvent(){

            let i = $('.visual_slider li.On').index()

            console.log(i);

            reset();

            if(i<visuLength){
                visuSlider.eq(i+1).addClass('On');
                visuNav.eq(i+1).addClass('active');
            }
            if(i==visuLength){
                i=0
                visuSlider.eq(i).addClass('On');
                visuNav.eq(i).addClass('active');
                
            }

            
        }

        visuNav.click(function(){
            let i = $(this).index();

            reset()
            $(this).addClass('active');
            visuSlider.eq(i).addClass('On');

        })


        function reset(){
            visuSlider.removeClass('On');
            visuNav.removeClass('active');

        }
            



    }


    function allMenu(){

        const allMenu = $('header .btn_all_menu');
        const $header = $('header');
        const allBg = $('.allMenuWrapBg');


        allMenu.click(function(e){
            e.preventDefault();

            if($header.hasClass('active')== false){
                $header.addClass('active');
                allBg.fadeIn(300);
                
            }
            else{
                $header.removeClass('active');
                allBg.fadeOut(300);

            }



        })


    }


})

$(document).ready(function(){
		
			$('.menu>ul>li, .menu-outer').mouseover(function(){
				$('.menu-outer').stop().slideDown(200);
			});
		
			$('.menu-outer').mouseleave(function(){
				$(this).stop().slideUp(200);
			});
			});
		
 var $devWidth; 
            var $limitSize=992; 
            
            $(document).ready(function() {
                
                $devWidth=$("body").width(); 
            
                if($devWidth<$limitSize) {             
                    $('.allMenu>li').click(function(){
                        $(this).children('ul').slideToggle(); 
                        $(this).nextAll().children('ul').hide(); 
                        $(this).prevAll().children('ul').hide(); 
                            });
                            
                 };
             });        
            