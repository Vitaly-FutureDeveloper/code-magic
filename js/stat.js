window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	var CLOUD_WIDTH = 500;
	var CLOUD_HEIGHT = 200;

	var CLOUD_X = 100;
	var CLOUD_Y = 50;
	var GAP = 10;
	var FONT_GAP = 15;
	var TEXT_WIDTH = 50;
	var BAR_HEIGHT = 20;
	var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

	var renderCloud = function(ctx, x, y, color){
		ctx.fillStyle = color;
		ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
	};

	window.renderStatistics = function(ctx){
		renderCloud( ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)' );
		renderCloud( ctx, CLOUD_X, CLOUD_Y, '#fff' );

		var playerIndex = 0;
		var playerName = 'Вы';

		ctx.fillStyle = '#000';

		var players = ['Вы', 'Иван', 'Юля'];

		for (var i = 0; i < players.length; i++ ){
			ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i );
			ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, barWidth, BAR_HEIGHT);
		}
/*
		ctx.fillStyle = '#000';
		ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT)*0 );
		ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT)*0, barWidth, BAR_HEIGHT);

		var playerIndex = 1;
		var playerName = 'Иван';

		ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT)*1 );
		ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT)*1, barWidth, BAR_HEIGHT);

		var playerIndex = 2;
		var playerName = 'Юля';

		ctx.fillText('Юля', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT)*2 );
		ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT)*2, barWidth, BAR_HEIGHT);
	*/
	};






});