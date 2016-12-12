window.onload = function () {
	var oBox = document.getElementById('box');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLi = oBox.getElementsByTagName('li');
	var aBtn = oBox.getElementsByTagName('a');
	var Speed = -10;
	var timmer = null;


	oUl.innerHTML += oUl.innerHTML;
	
	oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
	
	// alert(oUl.offsetWidth);

	timmer = setInterval(function () {
		oUl.style.left = oUl.offsetLeft + Speed + 'px';
		if (oUl.offsetLeft < -oUl.offsetWidth/2) {
			oUl.style.left = '0';
		}else if(oUl.offsetLeft > 0) {
			oUl.style.left = -oUl.offsetWidth/2 + 'px';
		}
	}, 30);

	
	aBtn[0].onmouseover = function () {
		Speed = -10;
	};
	aBtn[1].onmouseover = function () {
		Speed = 10;
	};

	oUl.onmouseover = function () {
		clearInterval(timmer);
	}
	oUl.onmouseout = function () {
		timmer = setInterval(function () {
		oUl.style.left = oUl.offsetLeft + Speed + 'px';
		if (oUl.offsetLeft < -oUl.offsetWidth/2) {
			oUl.style.left = '0';
		}else if(oUl.offsetLeft > 0) {
			oUl.style.left = -oUl.offsetWidth/2 + 'px';
		}
	}, 30);
	}
}