/*animation js*/
setTimeout(function() {
    $('.inner div').addClass('done'); 
    
    setTimeout(function() {
      $('.inner div').addClass('page'); 
      
      setTimeout(function() {
          $('.pageLoad').addClass('off'); 
        
        $('body, html').addClass('on'); 
        
        
        },1500)
    },500)
  }, 500)

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
  /*nav bar scroll*/
 /* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}*/

$(document).ready(function(){
    $('.collapsible').collapsible();
  });



  $(document).ready(function(){
    $('.modal').modal();
  });
      