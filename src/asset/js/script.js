$(document).ready(function() {
// Mobile Menu toggle 
$("#openNav").click(function(){
  $('#mySidenav').css('width','100%');
});
$("#closeNav").click(function(){
  $('#mySidenav').css('width','0%');
});

$('.spMenuLinks li a').click(function(){
  $('#mySidenav').css('width','0%');
});


$(window).scroll(function() {
  if ($(this).scrollTop()>150){
    $('.scrollToTop').show(1000);
  }else{
    $('.scrollToTop').hide(1000);
  }
});

/* SNS Hover */
  function snsHover(){
    let path = "/public/images/social/";
    $(".icon_fb").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_fb_h.png`); 
      });     
    });     
    $(".icon_fb").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_fb.png`);    
      });    
    }); 

    $(".icon_twitter").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_twitter_h.png`); 
      });     
    });     
    $(".icon_twitter").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_twitter.png`);    
      });    
    }); 

    $(".icon_in").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_linkedin_h.png`); 
      });     
    });     
    $(".icon_in").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_linkedin.png`);    
      });    
    }); 

    $(".icon_ins").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_Instagram_h.png`); 
      });     
    });     
    $(".icon_ins").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_instagram.png`);    
      });    
    }); 

    $(".icon_youtube").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_youtube_h.png`); 
      });     
    });     
    $(".icon_youtube").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_youtube.png`);    
      });    
    }); 

    $(".icon_medium").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_medium_h.png`); 
      });     
    });     
    $(".icon_medium").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_medium.png`);    
      });    
    }); 
  } 
  snsHover();

  /**
   * INit WOW animation
   */
  var initWow = function() {
    var timeout = 10;
    setTimeout(function() {
      wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      });
      wow.init();
    }, timeout);
  };
  initWow();


});


