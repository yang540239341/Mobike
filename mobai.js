	window.onload=function(){
	var oSstart=document.getElementById('s-start');
	var sShow=function(){
		setInterval(sTimer,1500)
	}
	function sTimer(){
		oSstart.style.display='block';
	}
	sShow();
}