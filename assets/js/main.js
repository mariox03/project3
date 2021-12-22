$(function() {
  $('body').addClass('js');

  var $hamburger = $('.hamburger'),
      $nav = $('#site-nav'),
      $masthead = $('#masthead');

  $hamburger.click(function() {
    $(this).toggleClass('is-active');
    $nav.toggleClass('is-active');
    $masthead.toggleClass('is-active');
    return false; 
  })
});

img = document.getElementById("img1");
function enlargeImg() {
  img.style.transform = "scale(1.5)";
}
function resetImg() {
                img.style.width = "40%";
                img.style.height = "auto";
                img.style.transition = "width 0.5s ease";
}


hljs.initHighlightingOnLoad();

        $('.hero__scroll').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1200);
        });