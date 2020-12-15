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