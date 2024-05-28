let previos_scroll_pos = -1;
window.onscroll = function() {
	var scrollPosition = window.scrollY || document.documentElement.scrollTop;
	
	let screenHeight = window.innerHeight;
	let Divs = document.querySelectorAll('.InformationBlock')
	let bgImage0 = document.querySelector('.backgroundimage.false')
	let bgImage1 = document.querySelector('.backgroundimage.true')
	let bgCount = Number((scrollPosition/(screenHeight/1.2)).toFixed(0)) + 1
	
	let heights = Array(Divs.length).fill(0)
	for (let i = 0; i < Divs.length; i++){
		heights[i] = Divs[i].offsetHeight + Divs[i].offsetTop
	}
	for (let i = 0; i < heights.length; i++){
		if (heights[i] < scrollPosition || (heights[i]-Divs[i].offsetHeight) > screenHeight+scrollPosition){
			Divs[i].style.opacity = "0.4"
			Divs[i].style.scale = "0.9"
			Divs[i].style.filter = "blur(1px)"
		} else {
			Divs[i].style.filter = "blur(0px)"
			Divs[i].style.opacity = "1"
			Divs[i].style.scale = "1"
		}
	}
	
	if (bgCount>10) {
		bgCount=Number((bgCount+'')[1])
	}
	if (bgCount%2===0){
		bgImage0.src='image'+bgCount+'.jpg'
		bgImage1.style.opacity=0
		bgImage0.style.opacity=1
	} else {
		bgImage1.src='image'+bgCount+'.jpg'
		bgImage0.style.opacity=0
		bgImage1.style.opacity=1	
	}
};


window.onresize = function(){
	window.onscroll()
}
