$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})



$(document).ready(function(){
	
	$('ul.tabs02 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs02 li').removeClass('tabs02current');
		$('.tabs02-content').removeClass('tabs02current');

		$(this).addClass('tabs02current');
		$("#"+tab_id).addClass('tabs02current');
	})

})





$(document).ready(function(){
	
	$('ul.tabswd li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabswd li').removeClass('tabswdcurrent');
		$('.tabswd-content').removeClass('tabswdcurrent');

		$(this).addClass('tabswdcurrent');
		$("#"+tab_id).addClass('tabswdcurrent');
	})

})

