(function(){
	var but = document.querySelector('.but');
	but.addEventListener('mouseover',func);

	function func(event){
		but.style.left = randomIntegerW(0,widt) - but.clientWidth + 'px';
		but.style.top = randomIntegerH(0,heig) - but.clientHeight + 'px';
	};
	var widt = document.documentElement.clientWidth;
	var heig = document.documentElement.clientHeight;
	console.log(widt , heig);
	function randomIntegerW(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  function randomIntegerH(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  	var wid = randomIntegerW(0,widt);
})();