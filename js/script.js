$(document).ready(function(){

	adaptingServices();

	$('.service').hover(function(){
		$('.service.active').removeClass('active');
		$(this).addClass('active');
		adaptingServices();
	});

	$('.select').click(function(){
		$(this).toggleClass('opened');
	});

	$('.select .options p').click(function(){
		$('.select').addClass('checked').children('.placeholder').html( $(this).html());
		$('.select input[name=subject]').val($(this).html());
	});

	var headerHeight = $('header').outerHeight();

	$(window).bind('scroll',function(){
		if($(document).scrollTop() < headerHeight - 100){
			$('nav.scrolled').removeClass('scrolled');
		}else if(! $('nav').hasClass('scrolled')){
			$('nav').addClass('scrolled');
		}
	});

	$(window).bind('resize',function(){
		adaptingServices();
	});

	$('.burger-button').click(function(){
		$('.navigation').toggleClass('showed');
	});

	$('.advantage').hover(function(){
		if ( viewport().width < 600)
		{
			$('.advantage.active').removeClass('active');
			$(this).addClass('active');
			$('.advantage-text').html( $(this).children('p').html());
		}
	});

	$('.advantage-text').html( $('.advantage.active').children('p').html());
	
});

function scrollingTo(id)
{
	var scr = 0;
	$(id).prevAll().each(function(index,element){
		scr+= $(element).outerHeight();
	});
	$('body,html').animate({scrollTop : scr},{duration:1000,easing:'easeInOutQuart'});
	return false;
}

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function adaptingServices()
{
	if( viewport().width <800){
		$('.alpha').removeClass('hided').children('.container_960').html( $('.service.active').children('.desc').html());
		$('.omega').addClass('hided');
	}else{
		$('.omega').removeClass('hided').children('.container_960').html( $('.service.active').children('.desc').html());
		$('.alpha').addClass('hided');
	}
}