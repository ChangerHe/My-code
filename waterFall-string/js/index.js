window.onload=function(){
	waterFall('main','img');
}
function waterFall(parent,img){
	var allImg=document.getElementsByTagName('img'); 
	var clientWidth=document.body.offsetWidth;  //获取浏览器当前宽度
	var conCols=Math.floor(clientWidth/242);    //h获取该浏览器宽度下的横向盒子数量
	var container=document.getElementById('container');
	container.style.width=conCols*242+'px';  //设置container的宽度为实际宽度
	
	var halfMargin=(clientWidth-conCols*242)/2;
	container.style['margin-left']=halfMargin+'px';     //将container进行设置居中
	var heightArr=[];
	for (var i = 0; i < allImg.length; i++) {
		var imgHeight=allImg[i].offsetHeight;
		if(i<conCols){
			heightArr.push(imgHeight);
		}else{
			var minImgHeight=Math.min.apply(this,heightArr);
			var minImgIndex=getMinImgIndex(minImgHeight,heightArr);
			allImg[i].style.position='absolute';
			allImg[i].style.top=minImgHeight+'px';
			allImg[i].style.left=minImgIndex*242+halfMargin+'px';
			heightArr[minImgIndex]+=imgHeight;
		}
	}
	function getMinImgIndex(val,arr){
		for(var i in arr){
			if(val==arr[i]) return i;
		}
	}
}