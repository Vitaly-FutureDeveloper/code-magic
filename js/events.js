'use strict';

//ONMOUSEMOVE >>

(function(){

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');


dialogHandler.addEventListener('mousedown', function(evt){
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY
	};

	var dragged = false;

	var onMouseMove = function(moveEvt){
		moveEvt.preventDefault();
		dragged = true;

		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};

		setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
		setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
	};

	var onMouseUp = function(upEvt){
		upEvt.preventDefault();

		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);

		if(dragged){
			var onClickPreventDefault = function(evt){
				evt.preventDefault();
				dialogHandler.removeEventListener('click', onClickPreventDefault);
			};
			dialogHandler.addEventListener('click', onClickPreventDefault);
		}
	};

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});


})();

//ONMOUSEMOVE <<	

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
	fireballColor =  document.querySelector('input[name=fireball-color]');

//Functions for iterations >>
var coatChanger = function(){
	if( iterations.coat < COAT_COLORS.length - 1 ){
		iterations.coat++;
		wizardCoat.style.fill = COAT_COLORS[iterations.coat];
		coatColor.value = COAT_COLORS[iterations.coat];
	} else {
		iterations.coat = 0;
		wizardCoat.style.fill = COAT_COLORS[iterations.coat];
		coatColor.value = COAT_COLORS[iterations.coat];
	}
};
var eyesChanger = function(){
	if( iterations.eyes < EYES_COLORS.length - 1 ){
		iterations.eyes++;
		wizardEyes.style.fill = EYES_COLORS[iterations.eyes];
		eyesColor.value = EYES_COLORS[iterations.eyes];
	} else {
		iterations.eyes = 0;
		wizardEyes.style.fill = EYES_COLORS[iterations.eyes];
		eyesColor.value = EYES_COLORS[iterations.eyes];
	}
};
var fireballChanger = function(){
	if( iterations.fireball < FIREBALL_COLORS.length - 1 ){
		iterations.fireball++;
		setupFireballColor.style.backgroundColor = FIREBALL_COLORS[iterations.fireball];
		fireballColor.value = FIREBALL_COLORS[iterations.fireball];
	} else {
		iterations.fireball = 0;
		setupFireballColor.style.backgroundColor = FIREBALL_COLORS[iterations.fireball];
		fireballColor.value = FIREBALL_COLORS[iterations.fireball];
	}
};

var allChanger = function(evt){
	setupFireballColor.addEventListener('keydown', function(evt){
		if(evt.keyCode === ENTER_KEYCODE){
			coatChanger();
			eyesChanger();
			fireballChanger();
		}
	});
}
var allFocus = function(evt){
	var div = document.createElement('div');
	var elment = setupFireballColor.appendChild(div);
	elment.innerHTML = "<p>Подсказка! Нажатие на Enter изменит все цвета!</p>";
	div.classList.add('title_help_modal');
	setupFireballColor.addEventListener('keydown', allChanger);
}

//Functions for iterations <<

wizardCoat.addEventListener('click', coatChanger); //Events clicks on coat
wizardEyes.addEventListener('click', eyesChanger); //Events clicks eyes
setupFireballColor.addEventListener('click', fireballChanger); //Events clicks on fireball

setupFireballColor.addEventListener('focus', allFocus);

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