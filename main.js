
    $("ul li").hover(function(3000) {
          $(this).find('ul').slideToggle();
    });

    $(window).resize(function() {
          if($(window).width() > 768) {
                $("ul").removeAttr('style');
          }
    });
