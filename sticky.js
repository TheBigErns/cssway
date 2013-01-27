// If you have jQuery directly, then skip next line
google.load("jquery", "1");

function sticky_relocate() {
  var window_top = $(window).scrollTop();
	var div_top = $('#sticky-anchor').offset().top;
	if (window_top > div_top) $('.projectNav').addClass('sticky')
	else $('.projectNav').removeClass('sticky');
}
// If you have jQuery directly, use the following line, instead
// $(function() {
// If you have jQuery via Google AJAX Libraries
google.setOnLoadCallback(function() {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});
