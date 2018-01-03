$(function(){
	nav_li=$('#nav>li');
	nav_li.on('hover',function(){
		$(this).children('a:first').toggleClass('active').siblings('ul').stop(true).slideToggle('fast');
	});
	
	short_btn=$('.short_msg .switch');
	short_btn.on('click',function(){
		pr=$(this).parent();
		prw=pr.width();
		if(pr.css('left')<'0px')
		{
			pr.css('left','0px');
			$(this).css('background-position','0 0');
		}
		else
		{
			pr.css('left',-prw);
			$(this).css('background-position','-29px 0');
		}
		
	});
	
	var ansli=$('#aside .news .switch_bar li');
	ac='active'
	ansli.on('mouseover',function(){
		i=$(this).index();
		ansli.removeClass(ac).eq(i).addClass(ac).parent().siblings('ul').hide().eq(i).show();
	});
	
	
});