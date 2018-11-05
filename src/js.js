var visible = false;
var loggedIn = false;

$(document).ready(function(){

	$('#logins').hide();
	$('#panel').hide();

	setTimeout(function(){
		place();
		console.log('placed');
	}, 1000);

	$('#close').click(function(){
		$('#panel').fadeOut('fast');
	});

	$('body:not(#open)').click(function(event){
		if(event.target.id !== 'open'){
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

	$('#button').click(function(){
		$('#logins').slideUp();
		visible = false;
		setTimeout(function(){
			$('#open').html('Logout');
			loggedIn = true;
		}, 500);
	});
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