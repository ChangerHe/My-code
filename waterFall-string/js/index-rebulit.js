window.onload=function(){
	var container=document.getElementById('container');
	var imgs=document.getElementsByTagName('img');
	var clientWidth=document.body.clientWidth;
	var imgsNum=Math.floor(clientWidth/242);
	container.style.width=imgsNum*242;
	var halfWidth=(clientWidth-imgsNum*242)/2;
	container.style['margin-left']=halfWidth+'px';
	console.log(container.style['margin-left']);
	var Arr=new Array();
	for (var i = 0; i < imgs.length; i++) {
		if(i<imgsNum){
			var imgsHeight=imgs[i].offsetHeight;
			Arr.push(imgsHeight);
		}else{
			var minImgHeight=Math.min.apply(this,Arr);
			var minImgIndex=function(){
				for(var i in Arr){
					if(imgsHeight==Arr[i]) return i;
				}
			}
			imgs[i].style.position="absolute";
			imgs[i].style.top=minImgHeight+'px';
			imgs[i].style.left=minImgIndex*242+halfWidth+'px';
			Arr[minImgIndex]+=imgsHeight;
		}
	}
}
