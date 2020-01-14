window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	var colors1 = {
		con: "black",
		bg: "white",
	};
	var colors2 = {
		con: "black",
		bg: "rgba(0, 0, 0, 0.7)"
	};

	var CLOUD_X = 100;
	var CLOUD_Y = 10;
	var CLOUD_WIDTH = 420;
	var CLOUD_HEIGHT = 270;
	var BEZIRE_X = -50;
	var GAP = 10;

	var TEXTS = {
		T1: "Ура вы победили",
		T2: "Список результатов",
	};
	var TEXT_HEIGHT = 20;
	var TEXT_OPT = {
		SIZE: "16px",
		FONT: "PT Mono",
		COLOR: "#000000"
	};

	var FONT_GAP = 50;
	var TABLE_WIDTH = 40;
	var TABLE_HEIGHT = 150;

	//СЛУЖЕБНЫЕ ФУНКЦИИ >
	//вернёт максимальный элемент массива >
	var getMaxElement = function(array){
		var maxElement = array[0];
		for (var i in array){
			if (array[i] > maxElement){
				maxElement = array[i];
			}
		}
		return maxElement;
	};
	//вернёт случайное число от 0 до max >
	var rand = function(max){
		return Math.floor(Math.random() * Math.floor(max));
	};
	//СЛУЖЕБНЫЕ ФУНКЦИИ <

	var renderCloud = function(ctx, x, y, tx, ty, colors){
		ctx.beginPath();
		ctx.strokeStyle = colors.con;
		ctx.fillStyle = colors.bg;

		ctx.moveTo(x, y);

		ctx.lineTo(x + BEZIRE_X, ty / 2);
		ctx.lineTo(x, ty);

		ctx.lineTo(tx, ty);
		ctx.lineTo(tx - BEZIRE_X, ty / 2);

		ctx.lineTo(tx, y);
		ctx.closePathfill = colors.bg;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	};

	var renderText = function(ctx, texts, options){
		ctx.fillStyle = options.COLOR;
		ctx.font = `${TEXT_OPT.SIZE} ${TEXT_OPT.FONT}`;
		if (typeof(texts) == "object"){
			var i = 1;
			for (var tx in texts){
				ctx.fillText(texts[tx], CLOUD_X + GAP, CLOUD_Y + GAP + (TEXT_HEIGHT * i) );
				i++;
			}
		} else {
			ctx.fillText(texts, CLOUD_X + GAP, CLOUD_Y + GAP);
		}
	};

	window.renderStatistics = function(ctx, players, times){
		renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH + GAP, CLOUD_HEIGHT + GAP, colors2);
		renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, colors1);

		renderText(ctx, TEXTS, TEXT_OPT);

		var maxTime = getMaxElement(times);

		for (var i in players){

			if (players[i] == 'Вы')
				ctx.fillStyle = "red";
			else
				ctx.fillStyle = "rgba(0, 0, 255, " + Math.random() + ")";

			ctx.fillText(players[i], CLOUD_X + FONT_GAP + ((FONT_GAP + GAP) * i), CLOUD_HEIGHT - GAP);
			ctx.fillRect(CLOUD_X + FONT_GAP + ((FONT_GAP +GAP) * i), CLOUD_HEIGHT - GAP*3, TABLE_WIDTH, (-(TABLE_HEIGHT * times[i]) / maxTime));
		}
	};

});