/*animation js*/
setTimeout(function() {
    $('.inner div').addClass('done'); 
    
    setTimeout(function() {
      $('.inner div').addClass('page'); 
      
      setTimeout(function() {
          $('.pageLoad').addClass('off'); 
        
        $('body, html').addClass('on'); 
        
        
        })
    })
  }, 800)

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
  /*nav bar scroll*/
window.onscroll = function() {scrollFunction()};
var scroll = $(window).scrollTop();
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    if(scroll>300)
    {
        $("#navbar").css("background" , "red");
    }
    else
    {
        $("#navbar").css("background" , "transparent");
    }
}


$(document).ready(function(){
    $('.collapsible').collapsible();
  });

  new WOW().init();

  $(document).ready(function(){
    $('.modal').modal();
  });
      