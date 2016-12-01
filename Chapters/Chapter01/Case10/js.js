window.onload = function () {
	var aLi = document.getElementById('calendar').getElementsByTagName('li');
	var oBox = document.getElementById('demo');

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onmouseover = function () {
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className = 'none';
			}
			this.className = 'active';
		}
	}
}