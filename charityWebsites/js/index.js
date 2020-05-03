window.onload = function() 
{
	function $(id) 
	{
		return document.getElementById(id);
	}

	var dots = $("banner-dots-ul").getElementsByTagName('li');
	var index = 1;
	var animated = false; //判断是否完成动画
	var interval = 2000; //设置自动轮播间隔时间
	var timer;

	//一开始设置第一个圆点是“on”状态，当计时一到就改变下一个圆点，样式随着on改变。
	function showdots() 
	{
		for (var i = 0; i < dots.length; i++) 
		{
			if(dots[i].className == "on")
			{
				dots[i].className = "";
				break;
			}
		}
		dots[index-1].className = "on";
	}

	//每隔interval秒就执行一次点击下一图的操作。
	function play()
	{
        timer = setInterval(function () {next.onclick();}, interval);
    }
	//停止上面setInterval的操作。
    function stop()
	 {
        clearInterval(timer);
    }

	//轮播图切换图片
	function animate(offset) 
	{
		if (offset == 0) { return; }
		animated = true;
		var time = 300; //设置移动的总时间
		var inteval = 10; //设置移动的时间间隔
		var speed = offset/(time/inteval); //每次移动的偏移量
		var newleft = parseInt($('banner-body-ul').style.left) + offset;

		var go = function()
		{
			if ( (speed > 0 && parseInt($('banner-body-ul').style.left) < newleft) || (speed < 0 && parseInt($('banner-body-ul').style.left) > newleft)) 
			{
                $('banner-body-ul').style.left = parseInt($('banner-body-ul').style.left) + speed + 'px';
                setTimeout(go, inteval);
            }//如果图片是向左移动并且还没有移动完到新的图片||如果图片是向右移动并且还没有移动完到新的图片；控制图片移动，使它看起来有移动效果
            else 
			{
                $('banner-body-ul').style.left = newleft + "px";
				if (newleft > -700) 
				{
					$('banner-body-ul').style.left = -3500 + "px";
				}
				if (newleft < -3500) 
				{
					$('banner-body-ul').style.left = -700 + "px";
				}
                animated = false;
            }
        }
		
        go();	
	}

	//箭头控制图片移动
	$('next').onclick = function()
	{
		if (animated) 
		{
			return;
		}
        if (index == 5) 
		{
            index = 1;
        }
        else 
		{
            index += 1;
        }
		showdots();
		animate(-700);
	}
	$("prev").onclick = function()
	{
		if (animated) {
			return;
		}
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
		showdots();
		animate(700);
	}

	//为每个点添加点击事件
	for (var i = 0; i < dots.length; i++) 
	{
        dots[i].onclick = function () 
		{
        	if (animated) 
			{
				return;
			}
            if(this.className == 'on') 
			{
                return;
            }
            var myIndex = parseInt(this.getAttribute('index')); //获取自定义属性值
            var offset = -700 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showdots();
        }
    }
    $("banner-body").onmouseover = stop;
    $("banner-body").onmouseout = play;
    play();
}