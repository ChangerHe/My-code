window.onload=function(){
	var count=document.getElementsByClassName('pRight')[0].getElementsByTagName('span')[0];
	var self=document.getElementsByClassName('self')[0];
	var ram=document.getElementsByClassName('ram')[0];
	var clicks=document.getElementsByClassName('clickArea')[0].getElementsByTagName('img');
	var result=document.getElementsByClassName('game-tage')[0].getElementsByTagName('span')[0];
	var i=0;
	var int=setInterval(function (){
		if(i<3){
			ram.src=clicks[i].src;
		i++;}else{
			i=0;
		}
	},100)
	for (var i = 0; i < clicks.length; i++) {
		clicks[i].onclick=function(){
			self.src=this.src;
			clearInterval(int);
			judge();
		}
	}
	var j=1;
	function judge(){
		var num=Math.random();
		if(num<0.33){
			ram.src=clicks[0].src;
			if(self.src==clicks[0].src){
				result.innerHTML="equal";
			}else if(self.src==clicks[1].src){
				result.innerHTML="lose";
			}else{
				result.innerHTML="win";
				var A=j++;
				count.innerHTML=A;
			}
		}else if(num>=0.33&&num<0.76){
			ram.src=clicks[1].src;
			if(self.src==clicks[1].src){
				result.innerHTML="equal";
			}else if(self.src==clicks[2].src){
				result.innerHTML="lose";
			}else{
				result.innerHTML="win";
				var A=j++;
				count.innerHTML=A;
			}
		}else{
			ram.src=clicks[2].src;
			if(self.src==clicks[2].src){
				result.innerHTML="equal";
			}else if(self.src==clicks[0].src){
				result.innerHTML="lose";
			}else{
				result.innerHTML="win";
				var A=j++;
				count.innerHTML=A;
			}
		}
		console.log(count.innerHTML);
		console.log(num);
	}
	
	
	
	// setInterval(function(){
	// 	var i=0;
	// 	if(i<3){
	// 		return clicks[i].src.innerHTML,i++;
	// 	}else{
	// 		i=0;
	// 	}
	// },200)          //
	
}