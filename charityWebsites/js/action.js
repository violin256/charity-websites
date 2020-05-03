$(document).ready(function(){
	var he=$(window).height()-20;
	$(".txt01").css("margin-top",he/2-30+"px");
	$(".txt02").css("margin-top",he/2-30+"px");
	$(".action li").css("height",he+"px");
	$(".bgImageSet").css("height",he+"px");
	$(".txt01 li").css("height","40px");
	$(".txt01 li").css("width","100%");
	$(".txt02 li").css("height","40px");
	$(".txt02 li").css("width","100%");
	
	$(".bgColorChange01").hover(function(){
    	$(".bg01").css("height",he+"px");
    	$(".bgImageSet").css("background","url(../img/1.jpg)");
    	
	$(".bgImageSet").css("background-size","100% auto");
    	},function(){
    	$(".bg01").css("height","0px");
  	});
  	
  	$(".bgColorChange02").hover(function(){
    	$(".bg02").css("height",he+"px");
    	$(".bgImageSet").css("background","url(../img/2.jpg)");
    	
	$(".bgImageSet").css("background-size","100% auto");
    	},function(){
    	$(".bg02").css("height","0px");
  	});
  	
  	$(".bgColorChange03").hover(function(){
    	$(".bg03").css("height",he+"px");
    	$(".bgImageSet").css("background","url(../img/4.jpg)");
    	
	$(".bgImageSet").css("background-size","100% auto");
    	},function(){
    	$(".bg03").css("height","0px");
  	});
  	
  	$(".bgColorChange04").hover(function(){
    	$(".bg04").css("height",he+"px");
    	},function(){
    	$(".bg04").css("height","0px");
  	});
  	
  	$(".bgColorChange01").mouseenter(function(){
	    $(".bgImageSet").css("background","url(img/1.jpg)");
	    
	$(".bgImageSet").css("background-size","100% auto");
	});
	
	$(".bgColorChange02").mouseenter(function(){
	    $(".bgImageSet").css("background","url(img/2.jpg)");
	    
	$(".bgImageSet").css("background-size","100% auto");
	});
	
	$(".bgColorChange03").mouseenter(function(){
	    $(".bgImageSet").css("background","url(img/4.jpg)");
	    
	$(".bgImageSet").css("background-size","100% auto");
	});
	
	$(".bgColorChange04").mouseenter(function(){
	    $(".bgImageSet").css("background","url(img/5.jpg)");
	    
	$(".bgImageSet").css("background-size","100% auto");
	});
});