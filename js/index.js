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
      
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.sidenav').sidenav();
});