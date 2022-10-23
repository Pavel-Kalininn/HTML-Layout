var hidden = document.querySelectorAll('.swiper-wrapper');
var expandBtn = document.querySelectorAll('.swiper-expand-btn');

var expandBtnHandler = function (button, swiper_block) {
	button.addEventListener('click', function (evt) {
		evt.preventDefault;
		swiper_block.classList.toggle('swiper-wrapper--opened');
		button.classList.toggle('shrink-btn');
		if (button.innerText === 'Показать все') {
			button.innerText = 'Скрыть'
		} else {
			button.innerText = 'Показать все'
		}
	})
}

for (var i = 0; i < expandBtn.length; i++) {
	expandBtnHandler(expandBtn[i], hidden[i]);
}

var burgerBtn = document.querySelector('.burger-btn');
var sideMenu = document.querySelector('.side-menu');
var contentBox = document.querySelector('.content-wrapper');

burgerBtn.addEventListener('click', function (evt) {
	evt.preventDefault;
	sideMenu.classList.toggle('side-menu--opened');
	contentBox.classList.toggle('content-wrapper--blurred');
});

var closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function (evt) {
	evt.preventDefault;
	sideMenu.classList.toggle('side-menu--opened');
	contentBox.classList.toggle('content-wrapper--blurred');
});

var feedbackBtn = document.querySelector('.feedback-btn');
var feedbackModalMenu = document.querySelector('.feedback-modal');

feedbackBtn.addEventListener('click', function (evt) {
	evt.preventDefault;
	if (sideMenu.classList.contains('side-menu--opened')) {
		sideMenu.classList.toggle('side-menu--opened');
		feedbackModalMenu.classList.toggle('feedback-modal--opened');
	} else if (callbackModalMenu.classList.contains('callback-modal--opened')) {
		callbackModalMenu.classList.toggle('callback-modal--opened');
		feedbackModalMenu.classList.toggle('feedback-modal--opened');
		sideMenu.classList.toggle('side-menu--blurred');
	} else {
		feedbackModalMenu.classList.toggle('feedback-modal--opened');
		contentBox.classList.toggle('content-wrapper--blurred');
		sideMenu.classList.toggle('side-menu--blurred');
	}


})

var closeFeedbackModalMenu = document.querySelector('.feedback-modal__close-btn');

closeFeedbackModalMenu.addEventListener('click', function (evt) {
	evt.preventDefault;
	feedbackModalMenu.classList.toggle('feedback-modal--opened');
	contentBox.classList.toggle('content-wrapper--blurred');
	sideMenu.classList.toggle('side-menu--blurred');
})

var callbackBtn = document.querySelector('.callback-btn');
var callbackModalMenu = document.querySelector('.callback-modal');

callbackBtn.addEventListener('click', function (evt) {
	evt.preventDefault;
	if (sideMenu.classList.contains('side-menu--opened')) {
		sideMenu.classList.toggle('side-menu--opened');
		callbackModalMenu.classList.toggle('callback-modal--opened');
	} else if (feedbackModalMenu.classList.contains('feedback-modal--opened')) {
		feedbackModalMenu.classList.toggle('feedback-modal--opened');
		callbackModalMenu.classList.toggle('callback-modal--opened');
		sideMenu.classList.toggle('side-menu--blurred');
	} else {
		callbackModalMenu.classList.toggle('callback-modal--opened');
		contentBox.classList.toggle('content-wrapper--blurred');
		sideMenu.classList.toggle('side-menu--blurred');
	}
})

var closeCallbackModalMenu = document.querySelector('.callback-modal__close-btn');

closeCallbackModalMenu.addEventListener('click', function (evt) {
	evt.preventDefault;
	callbackModalMenu.classList.toggle('callback-modal--opened');
	contentBox.classList.toggle('content-wrapper--blurred');
	sideMenu.classList.toggle('side-menu--blurred');
})

