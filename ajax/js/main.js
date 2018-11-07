+(function(){
	loadXMLDoc();
	var wrap = document.querySelector('.wrap');
	var HTMLCLIENT = document.documentElement.clientHeight;
	var step = 1;
	var obj;
	var clinet;
	function loadXMLDoc() {
		var xmlhttp = new XMLHttpRequest();
	
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				obj = JSON.parse(xmlhttp.responseText);
				concData();
				clinet = wrap.lastElementChild.clientHeight;
			}

		}
		xmlhttp.open('Get', 'http://jsonplaceholder.typicode.com/posts');
		xmlhttp.send();
	};
	function concData(){
		obj.forEach( function(element, index) {
			if(element.userId == step){
			var cr = document.createElement('div');
			var crH2 = document.createElement('h2');
			crH2.innerHTML = element.title;
			cr.appendChild(crH2);
			var crP = document.createElement('p');
			crP.innerHTML = element.body;
			cr.appendChild(crP);
			wrap.appendChild(cr);
			}
		});
		step++;
	}
	window.addEventListener('scroll',function(event){
		var cline = wrap.lastElementChild.getBoundingClientRect();
		if((clinet + HTMLCLIENT) > cline.top){
			concData();
		}
	});
})();