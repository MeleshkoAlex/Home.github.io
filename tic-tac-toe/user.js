(function(){

	var work = document.querySelector('.work-fiel'),
		cols = work.querySelectorAll('li'),
		walks = document.querySelector('.walks span');
		prevStep = '0';
		work.addEventListener('click',workFunc);
		
	function workFunc(event){
		var target = event && event.target || event.srcElement;
		if(target.innerHTML == 'x' || target.innerHTML == '0'){
			return;
		}
		var step = (prevStep == '0')  ? 'x' : '0';
		prevStep = step;
		walks.innerHTML = (prevStep == '0')  ? 'x' : '0';
		if(target.tagName == 'LI'){
			target.innerHTML = step;
			checkResult();	
		}else {
			return;
		}

	};
	function checkResult(){
		// == 0
		if (cols[6].innerHTML=="0" && cols[4].innerHTML=="0" && cols[2].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[0].innerHTML=="0" && cols[4].innerHTML=="0" && cols[8].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[0].innerHTML=="0" && cols[1].innerHTML=="0" && cols[2].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[3].innerHTML=="0" && cols[4].innerHTML=="0" && cols[5].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[6].innerHTML=="0" && cols[7].innerHTML=="0" && cols[8].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[0].innerHTML=="0" && cols[3].innerHTML=="0" && cols[6].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[1].innerHTML=="0" && cols[4].innerHTML=="0" && cols[7].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		if (cols[2].innerHTML=="0" && cols[5].innerHTML=="0" && cols[8].innerHTML=="0"){
			alert('won 0');
			clearField();
		}
		// == x
		if (cols[6].innerHTML=="x" && cols[4].innerHTML=="x" && cols[2].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[0].innerHTML=="x" && cols[4].innerHTML=="x" && cols[8].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[0].innerHTML=="x" && cols[1].innerHTML=="x" && cols[2].innerHTML=="x"){
			alert('won x');

			clearField();
		}
		if (cols[3].innerHTML=="x" && cols[4].innerHTML=="x" && cols[5].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[6].innerHTML=="x" && cols[7].innerHTML=="x" && cols[8].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[0].innerHTML=="x" && cols[3].innerHTML=="x" && cols[6].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[1].innerHTML=="x" && cols[4].innerHTML=="x" && cols[7].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		if (cols[2].innerHTML=="x" && cols[5].innerHTML=="x" && cols[8].innerHTML=="x"){
			alert('won x');
			clearField();
		}
		var draw = false;
		top: for(var i = 0,len = cols.length; i < len;i++){
			if(cols[i].innerHTML == ''){
				draw = false;
				break top;
			}else{
				draw = true;
			}
		}
		if(draw){
			alert('draw');
			clearField();
		}

	}
	function clearField(){
		prevStep = '0';
		walks.innerHTML = 'x';
		for(var i = 0,len = cols.length; i < len;i++){
			cols[i].innerHTML = '';
		}
	}
})();
