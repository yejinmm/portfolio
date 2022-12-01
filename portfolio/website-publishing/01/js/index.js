
let cursorItem;
let circle;



let i=0, o = 0;
let mi=0, mo = 0;

window.onload = function(){
   
    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    
    window.addEventListener("mousemove", function(e){
        i = e.clientX;
        o = e.clientY;
        cursorItem.style.transform = "translate("+ i +"px, "+ o + "px )";
    });
    
    loop();
}

function loop(){
    mi += (i - mi ) * .09;
    mo += (o - mo ) * .09; 
    cursorItem.style.transform = "translate("+ mi +"px, "+ mo + "px )";

    requestAnimationFrame(loop);
}

  
  