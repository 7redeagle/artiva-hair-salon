// make image stretch entire page
$(document).ready(function () {
  $('.hero').height($(window).height());
})

// active menu item 
let activeNavItem = $('.nav-item');
activeNavItem.click(function () {
  activeNavItem.removeClass('active');
  $(this).addClass('active');
});