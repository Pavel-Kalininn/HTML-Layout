const breakpoint = window.matchMedia('(min-width: 768px)');
window.addEventListener('resize', breakpointCheck);
var swiper;
function breakpointCheck() {
	if (document.documentElement.clientWidth < 768) {
		enableSwiper();
		console.log('Включён');
	}
	if (document.documentElement.clientWidth >= 768 && swiper) {
		swiper.destroy(true, true);
		console.log('Выключен');
	}
}

var enableSwiper = function () {
	swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		spaceBetween: 16,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}

breakpointCheck();