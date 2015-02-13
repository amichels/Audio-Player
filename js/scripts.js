$(document).ready(function(){
	var audio = document.getElementById('js-controls');
	$(".js-play-bt").click(function(){
		var album = $(this).attr("data-album");
		$(".player").addClass("active");
		$(".label").css("background-image","url(images/"+album+".jpg)");
		audio.setAttribute('src', 'audio/'+album+'.mp3');
		audio.play();
		audio.onplay = function(){
			$(".player").addClass("play");
		};
		audio.onpause = function(){
			$(".player").removeClass("play");
		};
	});
	$("#js-player").click(function(){
		$(".player").removeClass("active");
		audio.pause();
	});
});