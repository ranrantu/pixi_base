var Global = Global||{};

Global.onScreenResize = function (){
	
	window.scrollTo(0, 0);

	//标准屏幕尺寸
	var phoneWidth = 375;
	var phoneHeight = 603;
	
	var contain = document.getElementsByClassName('contain');
	var w = document.body.clientWidth;
	var h = document.body.clientHeight;
	var v = phoneWidth/phoneHeight;
	var scale = w/h>v?(h/phoneHeight):(w/phoneWidth);
	
	for(var i=0;i<contain.length;i++){
		contain[i].style.transform = 'scale('+scale+')';
		contain[i].style.WebkitTransform = 'scale('+scale+')';
	}
}