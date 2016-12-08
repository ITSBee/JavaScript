window.onload = function () {
	var oBox = document.getElementById('box');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLi = oBox.getElementsByTagName('li');
	var aBtn = oBox.getElementsByTagName('a');
	var timmer = null;

	oUl.innerHTML += oUl.innerHTML;
	oUl.style.height = aLi[0].offsetHeight * aLi.length + 'px';

	aBtn[0].onmousedown = function () {
		timmer = setInterval(function () {
			oUl.style.top = oUl.offsetTop + -10 + 'px';
			if (oUl.offsetTop < -oUl.offsetHeight/2) {
				oUl.style.top = 0 + 'px';
			}
		}, 30)
		
	}
	aBtn[1].onmousedown = function () {
		timmer = setInterval(function () {
			oUl.style.top = oUl.offsetTop + 10 + 'px';
			if (oUl.offsetTop > 0) {
				oUl.style.top = -oUl.offsetHeight/2 + 'px';
			}
		}, 30)
		
	}

	aBtn[0].onmouseup = aBtn[1].onmouseup = function () {
		clearInterval(timmer);
	}
	
}