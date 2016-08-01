var GAME = GAME||{};

GAME.width = Math.min(414,$(window).width());
GAME.height = window.innerHeight;
GAME.ratio = GAME.width>320?((GAME.width-(GAME.width-320)/2)/320):GAME.width/320;

GAME.config = {
	resource:[
	]
};