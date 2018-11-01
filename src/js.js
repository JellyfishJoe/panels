var visible = false;

$(document).ready(function(){

	$('#logins').hide();

	//console.log($('#logins').is(':visible'));

	$('body:not(#open)').click(function(){
		console.log('body clicked');
		if($('#logins').is(':visible')){
			$('#logins').hide();
		}
		console.log($('#logins').is(':visible'));
	});

	$('#open').click(function(){
		if(visible = !visible){ 
			$('#logins').slideDown();
		}else{
			$('#logins').slideUp();
		}
	});

});