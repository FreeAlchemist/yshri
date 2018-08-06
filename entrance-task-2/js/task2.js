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
function deviceFilter(elclass,event){
	var event = event || window.event
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
function showTemp(event){
	// console.log(event.currentTarget.className)
	var event = event || window.event
	var el = event.currentTarget
	var elval = el.value
	// console.log(elval)
	var popupinfo = document.getElementById('popup-info-temp')
	if(parseInt(elval) > 0){elval = '+'+elval}
	popupinfo.innerHTML = elval
}


function deviceShowPopup(type,event){
	// alert(event.currentTarget.className)
	var event = event || window.event
	var currentel = event.currentTarget
	var elinfo = currentel.getElementsByClassName('switch')
	var elname = currentel.getElementsByClassName('device-name')
	var elstatus = currentel.getElementsByClassName('device-status')
	var info = elinfo[0].className
	var name = elname[0].innerHTML
	var status = elstatus[0].innerHTML
	var currenttemp = '+23'

	var el = document.getElementById('popup')
	el.style.display="block"

	var popupform = document.getElementById('popup-form')
	var popupname = document.getElementById('popup-name')
	var popupstatus = document.getElementById('popup-status')
	var popupinfo = document.getElementById('popup-info')
	var popupmenu = document.getElementById('popup-menu')
	var popupslider = document.getElementById('popup-slider')

	var elposition = currentel.getBoundingClientRect();
	var elX = elposition.left + window.scrollX;
	var elY = elposition.right + window.scrollY;
	var anidiff = 367-elX
	if(anidiff > 0){
		var anidiffmin = parseInt('-'+anidiff)
	}
	else{
		var anidiffmin = Math.abs(parseInt(anidiff))
	}
	// console.log(name)
	// console.log(status)
	// console.log(currentel.className)
	// console.log(elX)
	// console.log(elY)
	// console.log('anidiff')
	// console.log(anidiff)
	// console.log(anidiffmin)

	var animation = popupform.animate([
			// {transform: 'translate(-327px,530px) scale(0)'},
			{transform: 'translate('+anidiffmin+'px,530px) scale(0)'},
			{transform: 'translate(0px,0px) scale(1)'}
		],400)
	//Animate popup
	/*
		 transform: translate(0px,530px) scale(0);
		transform: translate(-327px,530px) scale(0);
		transform: translate(-112px,530px) scale(0);
		transform: translate(-112px,650px) scale(0);
		transform: translate(103px,530px) scale(0);
		transform: translate(318px,530px) scale(0);
		transform: translate(533px,530px) scale(0);
		transform: translate(748px,160px) scale(0);


		transform: translate(0px,0px) scale(1);
	*/

	popupname.innerHTML=""
	popupstatus.innerHTML=""
	popupinfo.innerHTML=""
	popupmenu.innerHTML=""
	popupslider.innerHTML=""

	if(name){popupname.innerHTML=name}
		else{popupname.innerHTML="Undefined device name"}
	if(status){popupstatus.innerHTML=status}
		else{popupstatus.innerHTML="Undefined device status"}
	if(info){popupinfo.innerHTML="<div class='"+info+"'><div>"}
	if(type == 'floor'){
		if(currenttemp){popupinfo.innerHTML= "<div id='popup-info-temp'>"+currenttemp+"</div><div class='"+info+"'/>"}
		popupslider.innerHTML="floor slider"
	}
	else if(type == 'lamp'){
		popupmenu.innerHTML="<div class='device-menupart active'>Вручную</div><div class='device-menupart'>Дневной свет</div><div class='device-menupart'>Вечерний свет</div><div class='device-menupart'>Рассвет</div>"
		popupslider.innerHTML="<input type='range' class='slider slider-lamp' min='10' max='100' value='75'/>"
	}
	else if(type == 'temp'){
		if(currenttemp){popupinfo.innerHTML= "<div id='popup-info-temp'>"+currenttemp+"</div><div class='"+info+"'/>"}
		popupmenu.innerHTML="<div class='device-menupart active'>Вручную</div><div class='device-menupart'>Холодно</div><div class='device-menupart'>Тепло</div><div class='device-menupart'>Жарко</div>"
		// popupslider.innerHTML="<div class='mintemp'>-10</div><div class='maxtemp'>30</div><input type='range' class='slider slider-temp' min='-10' max='30' value='23'/>"
		popupslider.innerHTML="<input type='range' class='slider slider-temp' min='-10' max='30' value='23' step='1' onchange='showTemp(event)'/>"
	}
	else{
		popupslider.innerHTML="Undefined device type"
	}
	if(popupmenu.innerHTML==""){popupmenu.style.display="none"}
		else{popupmenu.style.display="block"}
}
function deviceHidePopup(event){
	var el = document.getElementById('popup')
	// var elform = document.getElementById('popup-form')
	// elform.setAttribute('class','deviceHide')
	el.style.display="none"
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