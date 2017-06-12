window.onload=function(){
	waterFall();
}
function waterFall(){
	var allImg=$('.box');
	var imgWidth=$(allImg).eq(0).outerWidth();
	console.log(imgWidth)

	var screenWidth=$(window).width();
	var cols=Math.floor(screenWidth/imgWidth);
	console.log(cols)
	$('#main').css({
		'width':cols*imgWidth+'px',
		'margin':'0 auto'
	})

}
