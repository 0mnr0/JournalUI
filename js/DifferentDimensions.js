function TheSiteResize(){
	let w = document.body.clientWidth;
	let h = document.body.clientHeight;
	console.log(w,h, w+'<600:', (w<600))
	
	
	//UserAccInfo
	if (w<1000) {
		document.querySelector('.OneBigDiv').style.display='none'
	} else {
		document.querySelector('.OneBigDiv').style.display='block'
	}
	if (w<600) {
		document.querySelector('.UserMenu').style.display='none'
	} else {
		document.querySelector('.UserMenu').style.display='flex'
	}
	//--UserAccInfo--

	
	
}



window.addEventListener("resize", function(event) {
   TheSiteResize()
})
