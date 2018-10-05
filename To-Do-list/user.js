(function(){
	var inputText = document.querySelector('.input-text'),
	inputNumb = document.querySelector('.input-numb'),
	addText = document.querySelector('.add-text'),
	close = document.querySelector('.close'),
	work = document.querySelector('.work-field');

	close.addEventListener('click', closed);
	addText.addEventListener('click',addLi);
	inputText.addEventListener('keyup',keyUp);
	inputNumb.addEventListener('keyup',keyUp);
	work.addEventListener('click',delegWork);

	function closed(){
		close.parentElement.style.display = 'none';
	}
	function keyUp(event){
		if(event.keyCode == 13){
			addLi();
		}
	}
	function addLi(){
		var li = document.createElement('li');
		if(inputText.value == ''){
			alert('The field dont\'t be empty!')
			return;
		}
		li.innerHTML = inputText.value + '<span class="time">'+inputNumb.value+'</span><span data-close="closed">x</span>';
		work.insertBefore(li,work.firstElementChild);
		var time = inputNumb.value;
		var textIn = inputText.value;
		inputText.value = '';
		inputNumb.value = '';
		var timeLine = li.querySelector('.time');
		timer(time,timeLine,textIn);
	}
	function delegWork(event){
		var target = event && event.target || event.srcElement;
		if (target.tagName.toLowerCase() == 'li') {
			target.classList.toggle('checked');
		}
		if(target.getAttribute('data-close') == 'closed'){
			work.removeChild(target.parentElement);
		}
	}
	function timer(time,timeLine,textIn){
		var step = time;
        var startTime = setInterval(function(){
        	if(step >= 0){
	        	timeLine.innerText = step;
	        	 step--;
	        		
        	}else{
				close.parentElement.style.display = 'block';
				close.parentElement.querySelector('.text-clock').innerText = textIn ;
  				clearInterval(startTime);
  			}
        }, 1000);
    }
    
})();