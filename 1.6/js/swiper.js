const breakpoint = window.matchMedia('(min-width: 768px)');
window.addEventListener('resize', breakpointCheck);
var swiper;
function breakpointCheck() {
	if (document.documentElement.clientWidth < 768) {
		enableSwiper();
	}
	if (document.documentElement.clientWidth >= 768 && swiper) {
		swiper.destroy(true, true);
	}
}

var enableSwiper = function () {
	swiper = new Swiper(".swiper", {
		slidesPerView: "auto",
		spaceBetween: 16,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}

breakpointCheck();