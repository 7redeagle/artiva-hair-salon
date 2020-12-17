// auto close navbar when pressed 
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    } else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}

// hero
$(".hero"), css({
  height: $(window).height() + "px"
});

$(window).on("resize", function () {
  $(".hero").css({
    height: $(window).height() + "px"
  })
})

// active menu item 
let activeNavItem = $('.nav-item');
activeNavItem.click(function () {
  activeNavItem.removeClass('active');
  $(this).addClass('active');
});