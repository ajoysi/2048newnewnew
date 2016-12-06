// 先找到对象，然后给对象创建事件，最后写函数
			// 点击了开始游戏之后就切换到游戏开始的那一个界面
			var start=document.getElementById('start');
			var begin=document.getElementById('begin');
			var wrap = document.getElementById('wrap');
			begin.onclick=function(){
				wrap.style.display="block";
				start.style.display="none";

			}