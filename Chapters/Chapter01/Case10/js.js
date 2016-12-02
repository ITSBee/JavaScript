	var aDates = [
		'快过年啦要放假',
		'二月春风似剪刀',
		'烟花三月下扬州',
		'孤帆远永碧空尽',
		'唯见长江天际流',
		'发大水淹死人啊',
		'热死人来不偿命',
		'快开学了补作业',
		'秋高气爽真带劲',
		'十一放假去旅游',
		'光棍节剁手剁手',
		'寒冬腊月冻的跳',
	]

window.onload = function () {

	var aLi = document.getElementById('calendar').getElementsByTagName('li');
	var oBox = document.getElementById('box');

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function () {
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className = 'none';
			}
			this.className = 'active';
			
			oBox.innerHTML = '<h3>' + (this.index + 1) + '月活动</h3><p>' + aDates[this.index] + '</p>';

		}
	}
}