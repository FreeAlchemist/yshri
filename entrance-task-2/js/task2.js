function deviceMoveLeft(){
	var el = document.getElementById('device-list')
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition + 215
	if(currentposition < 0){
		el.style.left = newposition+"px"
	}
}
function deviceMoveRight(){
	var el = document.getElementById('device-list')
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
function deviceFilter(elclass){
	var menuelements = document.getElementsByClassName('device-menupart')
	for (var i = menuelements.length - 1; i >= 0; i--) {
		menuelements[i].setAttribute('class','device-menupart')
	}
	event.target.setAttribute('class','device-menupart active')
	//renew device list position in case filter is used after scroll
	var ellist = document.getElementById('device-list')
	ellist.style.left = "0px"
	//form device list based on selected filter
	var el = document.getElementById('device-list')
	var allelements = el.getElementsByClassName('device')
	var elements = el.getElementsByClassName(elclass)
	for (var i = allelements.length - 1; i >= 0; i--) {
		allelements[i].style.display = "none"
	}
	for (var i = elements.length - 1; i >= 0; i--) {
		elements[i].style.display = "block"
	}
}
function deviceShowPopup(){
	// alert(event.currentTarget.className)
	var el = document.getElementById('popup-floor')
	el.style.visibility="visible"
}
function deviceHidePopup(){
	// alert(event.currentTarget.className)
	var el = document.getElementById('popup-floor')
	el.style.visibility="hidden"
}
function scenarioMoveLeft(elid){
	var el = document.getElementById(elid)
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition + 215
	if(currentposition < 0){
		el.style.left = newposition+"px"
	}
}
function scenarioMoveRight(elid){
	var el = document.getElementById(elid)
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition - 215
	currentwidth = parseInt(elstyle.width)
	var elements = el.getElementsByClassName('scenario')
	var diff = currentwidth - (215 * elements.length)
	if(newposition > diff){
		el.style.left = newposition+"px"
	}
}