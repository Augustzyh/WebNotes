
	window.onload = function() {
		var wrap = document.querySelector(".wrap");
		var next = document.querySelector(".btright");
		var prev = document.querySelector(".btleft");

		//set change button
		next.onclick = function(){
			next_pic();
		}
		prev.onclick = function(){
			prev_pic();
		}
		function next_pic(){
			index++;
			if(index > 4){
				index = 0;
			}
			showCurrentDot();

			var newLeft;
			if(wrap.style.left === "-7362px"){
				newLeft = -2454;
			}
			else{
				newLeft = parseInt(wrap.style.left) - 1227;
			}
			wrap.style.left = newLeft + "px";

			
		}
		function prev_pic(){
			index--;
			if(index < 0){
				index = 4;
			}
			showCurrentDot();

			var newLeft;
			if(wrap.style.left === "0px"){
				newLeft = -4908;
			}
			else{
				newLeft = parseInt(wrap.style.left) + 1227;
			}
			wrap.style.left = newLeft + "px";

			
		}

		//auto play banner
		var timer = null;
		function autoPlay(){
			timer = setInterval(function() {
				next_pic();
			},2000);
		};
		autoPlay();
		
		//stop on which u wanna stop
		var container = document .querySelector(".container");
		container.onmouseenter = function() {
			clearInterval(timer);
		}
		container.onmouseleave = function(){
			autoPlay();
		}

		//let the dots go with banner images
		var index = 0;
		var dots = document.querySelectorAll(".container .change ul li");
		function showCurrentDot(){
			for(var i=0,len=dots.length;i<len;i++) {
				dots[i].className = "";
			}
			dots[index].className = "on";
		}

		//stop on which picture u hold on
		for (var i=0, len = dots.length; i < len ; i++ )
		{
			(function(i){
				dots[i].onclick = function(){
					var dis = index - i;
					if(index == 4 && parseInt(wrap.style.left) !== -6135) {
						dis = dis - 5;
					}
					if(index == 0 && parseInt(wrap.style.left) !== -1227) {
						dis = 5 + dis;
					}
					wrap.style.left = (parseInt(wrap.style.left) + dis * 1227) + "px";
					index = i;
					showCurrentDot();
				}
			})(i);
		}
    }

