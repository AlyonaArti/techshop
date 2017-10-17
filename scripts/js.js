$(document).ready(function() {
	if ($('.owl-carousel').length > 0) {
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			items:1,
			navText: ['',''],
		});
	}
});
$(document).ready(function() {
	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		mode: 'horizontal',
		nextText: '',
		prevText:'',
	});
});