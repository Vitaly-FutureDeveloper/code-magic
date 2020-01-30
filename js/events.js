'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

var openPopup = function(){
	setup.classList.remove('hidden');

	document.addEventListener('keydown', function(evt){
		if(evt.keyCode === 27)
			closePopup();
	});
};
var closePopup = function(){
	setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function(){
	openPopup();
});

setupOpen.addEventListener('keydown', function(evt){
	if(evt.keyCode === 13)
		openPopup();
});

setupClose.addEventListener('click', function(){
	closePopup();
});
setupClose.addEventListener('keydown', function(evt){
	if(evt.keyCode === 13)
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