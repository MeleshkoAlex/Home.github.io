
document.addEventListener("DOMContentLoaded", handler);

function handler() {

	let tabBut = document.querySelectorAll('.tab-but>li'),
	tabText = document.querySelectorAll('.tab-text>div'),
	wrapTabBut = document.querySelector('.tab-but'),
	wrapTabText = document.querySelector('.tab-text');

	tabBut[0].classList.add('select');
	tabText[0].classList.add('select-text');

	for(let i = 0,len = tabBut.length; i< len; i++){
		tabBut[i].setAttribute('data-id',i + 1);
	}
	for(let i = 0,len = tabText.length; i< len; i++){
		tabText[i].setAttribute('data-id',i + 1);
	}
	wrapTabBut.addEventListener('click', go);

	function go(event){

		let targ = event.target;
		if (targ.tagName !== 'LI') return;

		let id = targ.getAttribute('data-id'),
		idTab = 'data-id',
		idDiv = wrapTabText.querySelector('div['+ idTab +'= \"' + id+ '\"]');

		for(let i = 0,len = tabBut.length; i < len; i++){
			tabBut[i].classList.remove('select');
		}
		targ.classList.add('select');
		for(let i = 0,len = tabText.length;i < len; i++){
			tabText[i].classList.remove('select-text');
		}
		idDiv.classList.add('select-text');
	};
};
		// textDiv = idDiv.innerHTML;
		// let clonInner = textDiv,
		// textDivArr = clonInner.split('');
		
		//idDiv.innerHTML = '';
		// innerInterval(textDivArr);
/*		function InnerBox(){
			if(textDiv == null) return;
			console.log(idDiv);
			idDiv.innerHTML = clonInner;

		};
		*/
		/*function innerInterval(text){
			if(textDiv == null) return;
			let i = 0,
			len = text.length;
			let startInterval = setInterval(function(){
				if(i < len){	
					idDiv.innerHTML += text[i];
					i++;
				}else{
					clearInterval(startInterval);
				}

			},10);
		};

		*/
