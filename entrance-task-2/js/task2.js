function needMove(){

}

function moveLeft(elid){
	var el = document.getElementById(elid)
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition + 215
	if(currentposition < 0){
		el.style.left = newposition+"px"
	}
}
function moveRight(elid){
	var el = document.getElementById(elid)
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition - 215
	currentwidth = parseInt(elstyle.width)
	var elements = el.getElementsByClassName('device')
	var diff = currentwidth - (215 * elements.length)
	if(newposition > diff){
		el.style.left = newposition+"px"
	}
}


// function deviceFilter(elclass){
// 	console.log(class)
// 	// var elements = el.getElementsByClassName(class)
// 	// for (var i = elements.length - 1; i >= 0; i--) {
// 	// 	elements[i].style.display = "none"
// 	// }
// }