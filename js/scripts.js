// Kilkenny Free Range scripts and functions

$(function(){
  $("#page_header").load("/includes/header.html");
});

$(function(){
  $("#page_footer").load("/includes/footer.html");
});

$('a.smooth_scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

$(document).scroll(function() {
		var beta = $(this).scrollTop();
		if (beta < $(window).height()) {
			$(".scroll_top").css({"opacity":"0"});
		} else {
			$(".scroll_top").css({"opacity":"1"});
		}
});
