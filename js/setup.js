window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	//VARIABLES >>
	var userDialog = document.querySelector('.setup'),
		setupSimilar = document.querySelector('.setup-similar');
	var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
	var setupSimilarList = document.querySelector('.setup-similar-list');

	var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 
					'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	var SONAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 
					'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
	var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 
						'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 
						'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
	//VARIABLES <<

	//FUNCTIONS >>
	function rand(max){
		return Math.floor(Math.random() * Math.floor(max));
	}
	
	function constructRandWizard(){
		var int = {
			name: rand(NAMES.length - 1),
			soname: rand(SONAMES.length - 1),
			coatColor: rand(COAT_COLORS.length - 1),
			eyesColor: rand(EYES_COLORS.length - 1),
		};

		return {
			name: NAMES[int.name] + ' ' + SONAMES[int.soname],
			coatColor: COAT_COLORS[int.coatColor],
			eyesColor: EYES_COLORS[int.eyesColor],
		};
	}
	function renderWizard(){
		var wizardElement = similarWizardTemplate.cloneNode(true);
		var wizardsObj = constructRandWizard();

		wizardElement.querySelector('.setup-similar-label').innerText = wizardsObj.name;
		wizardElement.querySelector('.wizard-coat').style.fill = wizardsObj.coatColor;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizardsObj.eyesColor;

		return wizardElement;
	}
	function createDocWizard(){
		var fragment = document.createDocumentFragment();
		for(var i = 0; i < 4; i++){
			fragment.appendChild(renderWizard());
		}
		setupSimilarList.appendChild(fragment);
	}

	//FUNCTIONS <<

	//SCRIPT >>
	userDialog.classList.remove('hidden');
	setupSimilar.classList.remove('hidden');

	createDocWizard();

});