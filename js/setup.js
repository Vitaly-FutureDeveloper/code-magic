'use strict';

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ["Дамблдор", "Волдеморт", "Доктор Стрендж", "Гарри Поттер"];

var wizards = [
	{
		name: WIZARD_NAMES[0],
		coatColor: 'rgb(20, 43, 107)'
	},
	{
		name: WIZARD_NAMES[1],
		coatColor: 'rgb(101, 200, 107)'
	},
	{
		name: WIZARD_NAMES[2],
		coatColor: 'rgb(101, 43, 200)'
	},
	{
		name: WIZARD_NAMES[3],
		coatColor: 'rgb(101, 100, 107)'
	},
];

var renderWizard = function(wizard){
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').innerText = WIZARD_NAMES[i];
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

	return wizardElement;
}

var fragment = document.createDocumentFragment();
for(var i = 0; i < wizards.length; i++){
	fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');