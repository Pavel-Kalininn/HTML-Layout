var hidden = document.querySelector('.swiper-wrapper');
var expandBtn = document.querySelector('.expand-btn');

expandBtn.addEventListener('click', function (evt) {
	evt.preventDefault;
	hidden.classList.toggle('hidden');
	expandBtn.classList.toggle('shrink-btn');
	if (expandBtn.innerText === 'Показать все') {
		expandBtn.innerText = 'Скрыть'
	} else {
		expandBtn.innerText = 'Показать все'
	}
})
