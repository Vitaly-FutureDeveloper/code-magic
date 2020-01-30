'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function(evt){
	if(evt.keyCode === ESC_KEYCODE){
		closePopup();
	}
};

var openPopup = function(){
	setup.classList.remove('hidden');

	document.addEventListener('keydown', onPopupEscPress);
};
var closePopup = function(){
	setup.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function(){
	openPopup();
});

setupOpen.addEventListener('keydown', function(evt){
	if(evt.keyCode === ENTER_KEYCODE)
		openPopup();
});

setupClose.addEventListener('click', function(){
	closePopup();
});
setupClose.addEventListener('keydown', function(evt){
	if(evt.keyCode === ENTER_KEYCODE)
		closePopup();
});

//Валидация формы отправки данных
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function(evt){
	if(userNameInput.validity.tooShort){
		userNameInput.setCustomValidity('Имя должно состоять минимум из 2 символов');
	} else if(userNameInput.validity.tooLong){
		userNameInput.setCustomValidity('Имя не должно превышать 25 символов');
	} else if(userNameInput.validity.valueMissing){
		userNameInput.setCustomValidity('Обязательное поле');
	} else {
		userNameInput.setCustomValidity('');
	}
});