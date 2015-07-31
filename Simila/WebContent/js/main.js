/*;
(function() {

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function() {
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

})(jQuery)

$( document ).ready(function() {
$(window).load(function() {
$(".loader").fadeOut("slow");
});
});
*/
$(function() {
	$.stellar({
		horizontalScrolling : false,
		verticalOffset : 40
	});
});

$(function() {
	// fancybox
	jQuery(".fancybox").fancybox();
});
