'use strict';

var data = new FormData(document.querySelector('.setup-wizard-form'));

var onError = function (message){
	console.error(message);
};
var onSuccess = function (data){
	console.log(data);
};