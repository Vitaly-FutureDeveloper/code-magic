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
	var GAB = 10;

	var TEXTS = {
		T1: "Ура вы победили",
		T2: "Список результатов",
	};
	var TEXT_HEIGHT = 20;
	var TEXT_WIDTH = 30;



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

	window.renderStatistics = function(ctx, players, times){
		renderCloud(ctx, CLOUD_X + GAB, CLOUD_Y + GAB, CLOUD_WIDTH + GAB, CLOUD_HEIGHT + GAB, colors2);
		renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, colors1);

	};









});