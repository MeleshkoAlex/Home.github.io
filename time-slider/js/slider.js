(function(){

	var slider = document.querySelector('.slider');
	var child = slider.children;

	for(var p = 0,lenP = child.length; lenP > p; p++){
		child[p].classList.add('slider-items');
	}
	var clasWrap = '<div class="slider-wrap">';
	var clasLine = '<div class="slider-line">';
	slider.insertAdjacentHTML('afterBegin', clasWrap);
	slider.firstElementChild.insertAdjacentHTML('afterBegin',clasLine);
	var widLine = document.querySelector('.slider-line');
	var sliderWrap = document.querySelector('.slider-wrap');
	widLine.style.width = childWidth()+'px';
	function creatBut(){
			var butNext = document.createElement('button');
			butNext.classList.add('slider-next');
			butNext.innerHTML = 'next';
			slider.appendChild(butNext);
			var butPrev = document.createElement('button');
			butPrev.classList.add('slider-prev');
			butPrev.innerHTML = 'prev';
			slider.appendChild(butPrev);
			butNext.classList.add('slider-row');
			butPrev.classList.add('slider-row');
	}
	creatBut();
	function cloneChild(){
		for(var i = 0,len = child.length; len > i;i++){
			if(child[i].classList.contains('slider-items')){
				var clone = child[i].cloneNode(true);
				widLine.appendChild(clone);
			}		
		}
		for(var k = 0; child.length > k;k++){
			if(child[k].classList.contains('slider-items')){
				slider.removeChild(child[k]);
				k--;
			}	
		}
	}
	cloneChild();

	function childWidth(){
		var widthLine = 0;
		var lenItem = 0;
		for(var i = 0,len = child.length; len > i;i++){
			if(child[i].classList.contains('slider-items')){
				var style = getComputedStyle(child[i]);
				widthLine += parseInt(style.width);
				lenItem++;
			}
		}
		return widthLine;
	}
	var butNext = document.querySelector('.slider-next');
	var butPrev = document.querySelector('.slider-prev');

	butNext.addEventListener('click',nextItemBut);
	butPrev.addEventListener('click',prevItembut);
	sliderWrap.addEventListener('mouseover',stopInterval);
	sliderWrap.addEventListener('mouseout',timeInterval);
	var timers;
	var step  = -900;
	var widLineStyle = parseInt(widLine.style.width);
	
	timeInterval();


	// работает криво слайдер задерка в начале и конце слайда поправить
	// сделать кнопку перелистования назад
	// сделать ровную анимацию


	function timeInterval(){
		timers = setTimeout(function(){
			console.log('run');
		timeInterval();
		nextItem();
		
		}, 1000);
		return timers;
	};

	function stopInterval(){
		clearTimeout(timers);
	}
	function nextItemBut(){
		stopInterval();
		nextItem();
		timeInterval();
	}
	function prevItembut(){
		stopInterval();
		prevItem();
		timeInterval();

	}
	function prevItem(){
		if(step == 0){
			step = -900 * 5;
			widLine.style.transform = 'translateX('+step +'px)';
		}else{
			if(step > -widLineStyle){
			step += 900;	
			widLine.style.transform = 'translateX('+step +'px)';
			console.log(step);
					
		}else{
			step = 0;
			return;
		}
		}
	}
	function nextItem(){
		if(step > -widLineStyle){
			widLine.style.transform = 'translateX('+step +'px)';
				step -= 900;	
		}else{
			step = 0;
			return;
		}
	}
}());