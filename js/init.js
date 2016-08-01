/* create by ranrantu 2016/8/1 */
var renderer,stage;

GAME.init = function (){
	Global.onScreenResize();

	renderer = PIXI.autoDetectRenderer(GAME.width, GAME.height, {
		view: document.querySelector('#pixi-canvas')
	},true);
	stage = new PIXI.Container();

	renderer.render(stage);
	requestAnimationFrame(animate);

	function animate(){
		renderer.render(stage);
	    requestAnimationFrame(animate);
	}
}