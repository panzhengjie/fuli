// JavaScript Document
$(function(){
	var rightcorner_html='<div class="topcontrol"><div class="topcontrol_tel"><i></i><span>电话咨询</span><div class="topcontrol_tel_txt"><div class="topcontrol_tel_sanjiao"></div><em>4008-123-510</em><b>（早9：00-晚6：00）</b></div></div><div class="topcontrol_weixin"><i></i><span>微信咨询</span><div class="topcontrol_weixin_txt"><div class="topcontrol_weixin_sanjiao"></div><em>扫码关注</em><img src="images/erweima.jpg" /></div></div><div class="topcontrol_kanfang"><i></i><span>委托看房</span></div><div class="topcontrol_bot"><i></i><span>返回顶部</span></div></div>'
	
	//添加元素
	$('body').append(rightcorner_html);	
	
	//判断滚动条是否超过规定位置并现实
   $(window).scroll(function(){	   		
   		if($(document).scrollTop() >= 220){
			$('.topcontrol').fadeIn("slow");
		}else{
			$('.topcontrol').fadeOut(500);
			$('.topcontrol_tel_txt').hide();
			$('.topcontrol_weixin_txt').hide();
		};
		
	});
	
	//右下角效果
	$('.topcontrol_kanfang').hover(function(){
		if($('.topcontrol_kanfang').hasClass('hover')){
			$(this).removeClass('hover');
		}else{
			$(this).addClass('hover');
		};
	});
	
	$('.topcontrol_tel').hover(function(){
		if($('.topcontrol_tel').hasClass('hover')){
			$(this).removeClass('hover');
		}else{
			$(this).addClass('hover');
		};
		if($('.topcontrol_tel_txt').is(":hidden")){
			$('.topcontrol_tel_txt').show();
		}else{
			$('.topcontrol_tel_txt').hide();
		};
	});
	$('.topcontrol_weixin').hover(function(){
		if($('.topcontrol_weixin').hasClass('hover')){
			$(this).removeClass('hover');
		}else{
			$(this).addClass('hover');
		};
		if($('.topcontrol_weixin_txt').is(":hidden")){
			$('.topcontrol_weixin_txt').show();
		}else{
			$('.topcontrol_weixin_txt').hide();
		};
	});
	$('.topcontrol_bot').hover(function(){
		if($('.topcontrol_bot').hasClass('hover')){
			$(this).removeClass('hover');
			$(this).children('i').css('background','url(images/m0453_topcontrol_bot.png) no-repeat 0 0px');
		}else{
			$(this).addClass('hover');
			$(this).children('i').css('background','url(images/m0453_topcontrol_bot.png) no-repeat -18px 0');
		};
	});
	
	//回到顶部
	$('body').on("click",".topcontrol_bot",function(){
		$("body,html").animate({scrollTop:0},300);		
	});
	
	
})



