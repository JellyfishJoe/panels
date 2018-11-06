var visible = false;
var loggedIn = false;

$(document).ready(function(){

	$('#logins').hide();
	$('#panel').hide();

	setTimeout(function(){
		place();
	}, 1000);

	//tooltips
	$('.location').hover(function(event){
		event.preventDefault();
		var titleText = $(this).attr('title');
		$(this).data('tipText', titleText).removeAttr();
		$('<p class="tootTip"></p>').text(titleText).appendTo('body').css({
			'top': (event.pageY - 10) + 'px',
			'left': (event.pageX + 20) + 'px',
		});
	});

	$('#close').click(function(){
		$('#panel').fadeOut('fast');
	});

	//find better way to do this, right now it sucks but I'm lazy
	$('body').click(function(event){
		if(event.target.id !== 'open' && event.target.id !== 'logins' && event.target.id !== 'username' && 
			event.target.id !== 'password' && event.target.id !== 'button'){
			if($('#logins').is(':visible')){
				$('#logins').slideUp();
				visible = false;
			}
		}
	});

	$('#open').click(function(){
		if(loggedIn == false){
			if(visible = !visible){ 
				$('#logins').slideDown();
			}else{
				$('#logins').slideUp();
			}
		} else{
			$('#open').html('Log In');
			loggedIn = false;
		}
	});
/*
	$('#button').click(function(){
		console.log('username = ' + $('#username').val());
		console.log('password = ' + $('#password').val())
		if($('#username').val() == ''){
			$('#usernameError').html('You need to enter a username');
		} else if($('#password').val() == ''){
 			$('#passwordError').html('You need to enter a password');
		} else{
			$('#logins').slideUp();
			visible = false;
			setTimeout(function(){
				$('#open').html('Logout');
				loggedIn = true;
			}, 500);
		}
	});
*/
});

function place(){
	var top = ($(window).height() - $('#panel').height()) / 2;
	var left = ($(window).width() - $('#panel').width()) / 2;
	$('#panel').css({
		'top': top,
		'left': left,
		'z-index': 50
	}).fadeIn('slow');
}