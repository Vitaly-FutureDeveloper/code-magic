'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

//OPEN/CLOSE MODAL >>

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
//OPEN/CLOSE MODAL <<

//CHOOSE COLORS coat, eyes, fireball >>

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 
					'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 
					'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var iterations = {
	coat: 0,
	eyes: 0,
	fireball: 0
};

var wizardCoat = document.querySelector('.wizard-coat'),
	coatColor = document.querySelector('input[name=coat-color]');

var wizardEyes = document.querySelector('.wizard-eyes'),
	eyesColor = document.querySelector('input[name=eyes-color]');

var setupFireballColor =  document.querySelector('.setup-fireball-wrap'),
	fireballColor =  document.querySelector('.fireball-color');

wizardCoat.addEventListener('click', function(){
	if( iterations.coat < COAT_COLORS.length - 1 ){
		iterations.coat++;
		wizardCoat.style.fill = COAT_COLORS[iterations.coat];
		coatColor.value = COAT_COLORS[iterations.coat];
	} else {
		iterations.coat = 0;
		wizardCoat.style.fill = COAT_COLORS[iterations.coat];
		coatColor.value = COAT_COLORS[iterations.coat];
	}
});

wizardEyes.addEventListener('click', function(){
	if( iterations.eyes < EYES_COLORS.length - 1 ){
		iterations.eyes++;
		wizardEyes.style.fill = EYES_COLORS[iterations.eyes];
		eyesColor.value = EYES_COLORS[iterations.eyes];
	} else {
		iterations.eyes = 0;
		wizardEyes.style.fill = EYES_COLORS[iterations.eyes];
		eyesColor.value = EYES_COLORS[iterations.eyes];
	}
});

setupFireballColor.addEventListener('click', function(){
		if( iterations.fireball < FIREBALL_COLORS.length - 1 ){
		iterations.fireball++;
		setupFireballColor.style.backgroundColor = FIREBALL_COLORS[iterations.fireball];
		fireballColor.value = FIREBALL_COLORS[iterations.fireball];
	} else {
		iterations.fireball = 0;
		setupFireballColor.style.backgroundColor = FIREBALL_COLORS[iterations.fireball];
		fireballColor.value = FIREBALL_COLORS[iterations.fireball];
	}

})

//CHOOSE COLORS coat, eyes, fireball <<

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