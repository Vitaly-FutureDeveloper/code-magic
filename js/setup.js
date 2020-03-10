window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	(function(){
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

		function renderWizard(wizard){
			var wizardElement = similarWizardTemplate.cloneNode(true);
			//var wizardsObj = constructRandWizard();
			try{
				wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
				wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
				//wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
			} catch {
				console.log('Ошибка при отрисовке волшебников');
			}
			return wizardElement;
		}


		//FUNCTIONS <<

		//SCRIPT >>
		userDialog.classList.remove('hidden');
		setupSimilar.classList.remove('hidden');


		var form = userDialog.querySelector('.setup-wizard-form');
		form.addEventListener('submit', function(evt){
			window.upload(new FormData(form), function (response){
				userDialog.classList.add('hidden');
			});
			evt.preventDefault();
		});

		var successHandler = function(wizards){
			var fragment = document.createDocumentFragment();

			for (var i = 0; i < 4; i++){
				fragment.appendChild(renderWizard(wizards[i]));
			}
			setupSimilarList.appendChild(fragment);

			userDialog.querySelector('.setup-similar').classList.remove('hidden');
		};

		var errorHandler = function(errorMessage){
			var node = document.createElement('div');
			node.style = 'z-index: 100; margin = 0 auto; text-align: center; background-color: red;';
			node.style.position = 'absolute';
			node.style.left = 0;
			node.style.right = 0;
			node.style.fontSize = '30px';

			node.textContent = errorMessage;
			document.body.insertAdjacentElement('afterbegin', node);
		}

		window.load(successHandler, errorHandler);


	})();
});