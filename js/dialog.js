'use strict';

(function(){

	var setupOpen = document.querySelector('.setup-open');
	var setup = document.querySelector('.setup');
	var setupClose = document.querySelector('.setup-close');

	//OPEN/CLOSE MODAL >>

	var onPopupEscPress = function(evt){
		if(evt.keyCode === ESC_KEYCODE){
			window.util.isEscEvent(evt, closePopup);
		}
	};

	var openPopup = function(){
		setup.classList.remove('hidden');

		document.addEventListener('keydown', onPopupEscPress);
	};
	var closePopup = function(){
		setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupEscPress);
		setupFireballColor.removeEventListener('focus', allFocus);
		setupFireballColor.removeEventListener('keydown', allChanger);
		try{
			document.querySelector('.title_help_modal').remove();
		} catch {
			console.log('Исключение:');
			console.log(document.querySelector('.title_help_modal'));
		}
	};

	setupOpen.addEventListener('click', function(){
		openPopup();
	});
	setupOpen.addEventListener('keydown', function(evt){
		window.util.isEnterEvent(evt, openPopup);
	});

	setupClose.addEventListener('click', function(){
		closePopup();
	});
	setupClose.addEventListener('keydown', function(evt){
		window.util.isEnterEvent(evt, closePopup);
	});


	//OPEN/CLOSE MODAL <<

})();
