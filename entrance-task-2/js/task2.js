function deviceMoveLeft(){
	var el = document.getElementById('device-list')
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition + 215
	if(currentposition < 0){
		el.style.left = newposition+"px"
		// var aniLeft = el.animate([
		// 	{transform:'translate('+currentposition+'px,0px)'},
		// 	{transform:'translate('+newposition+'px,0px)'}
		// 	],200)
		// aniLeft.onfinish = function(){el.style.left = newposition+"px"}
	}
}
function deviceMoveRight(){
	var el = document.getElementById('device-list')
	elstyle = getComputedStyle(el)
	currentposition = parseInt(elstyle.left)
	newposition = currentposition - 215
	currentwidth = parseInt(elstyle.width)

	// var elements = el.getElementsByClassName('device')
	var elements = el.getElementsByClassName('filtered')
	var diff = currentwidth - (215 * elements.length)
	// console.log('elements.length '+elements.length)
	// console.log(newposition+' > '+diff)
	if(newposition > diff){
		el.style.left = newposition+"px"
		// var aniRight = el.animate([
		// 	{transform:'translate('+currentposition+'px,0px)'},
		// 	{transform:'translate('+newposition+'px,0px)'}
		// 	],200)
		// aniRight.onfinish = function(){el.style.left = newposition+"px"}
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
		// var fadeOut = allelements[i].animate([
		// 	{transform:'scale(1)',opacity:1},
		// 	{transform:'scale(0.8)',opacity:0}
		// 	],400)
		allelements[i].classList.remove('filtered', 'unfiltered')
		allelements[i].classList.add('unfiltered')
		allelements[i].style.display = "none"
	}
	for (var i = elements.length - 1; i >= 0; i--) {
		// var fadeIn = allelements[i].animate([
		// 	{transform:'scale(0.8)',opacity:0},
		// 	{transform:'scale(1)',opacity:1}
		// 	],400)
		elements[i].classList.remove('unfiltered')
		elements[i].classList.add('filtered')
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
	var event = event || window.event
	var currentel = event.currentTarget
	var elinfo = currentel.getElementsByClassName('switch')
	var elname = currentel.getElementsByClassName('device-name')
	var elstatus = currentel.getElementsByClassName('device-status')
	var info = elinfo[0].className
	var name = elname[0].innerHTML
	var status = elstatus[0].innerHTML
	var currenttemp = '+23'
	var currentfloortemp = '+15'

	var el = document.getElementById('popup')
	el.style.display="block"
	el.setAttribute('class','overlay fadein')

	// var popupform = document.querySelector('#popup-form')
	var popupform = document.getElementById('popup-form')
	var popupname = document.getElementById('popup-name')
	var popupstatus = document.getElementById('popup-status')
	var popupinfo = document.getElementById('popup-info')
	var popupmenu = document.getElementById('popup-menu')
	var popupslider = document.getElementById('popup-slider')


	var elposition = currentel.getBoundingClientRect();
	var elX = elposition.left + window.scrollX;
	var elY = elposition.right + window.scrollY;

	var elX1 = elposition.left
	var elY1 = elposition.right

	var popupformpos = popupform.getBoundingClientRect();
	var formX = popupformpos.left + window.scrollX;
	var formY = popupformpos.right + window.scrollY;
	var formX1 = popupformpos.left
	var formY1 = popupformpos.right

	var anidiff = formX-elX
	if(anidiff > 0){
		var anidiffmin = parseInt('-'+anidiff)
	}
	else{
		var anidiffmin = Math.abs(parseInt(anidiff))
	}
	var clx = event.clientX
	var cly = event.clientY

	popupform.style.left = clx+'px'
	popupform.style.top = cly+'px'
	popupform.setAttribute('class','openpopup')


	// console.log(name)
	// console.log(status)
	// console.log(currentel.className)
	// console.log(clx)
	// console.log(cly)

	// console.log(elX)
	// console.log(elY)
	// console.log(elX1)
	// console.log(elY1)
	// console.log('----')
	// console.log(formX)
	// console.log(formY)
	// console.log(formX1)
	// console.log(formY1)
	// console.log('anidiff')
	// console.log(anidiff)
	// console.log(anidiffmin)

	// var animation = popupform.animate([
	//   {transform: 'translate('+anidiffmin+'px,530px) scale(0)'},
	//   {transform: 'translate(0px,0px)  scale(1)'}
	// ], 400);

	popupname.innerHTML=""
	popupstatus.innerHTML=""
	popupinfo.innerHTML=""
	popupmenu.innerHTML=""
	popupslider.innerHTML=""

	if(name){popupname.innerHTML=name}
		else{popupname.innerHTML="<p class='alert'>Имя устройства неопределено</p>"}
	if(status){popupstatus.innerHTML=status}
		else{popupstatus.innerHTML="<p class='alert'>Статус устройства неопределен</p>"}
	if(info){popupinfo.innerHTML="<div class='"+info+"'><div>"}
	if(type == 'floor'){
		if(currenttemp){popupinfo.innerHTML= "<div id='popup-info-temp'>"+currentfloortemp+"</div><div class='"+info+"'/>"}
		popupslider.innerHTML="<div class='slider-wrap'><div class='slider-floor-outer'><div class='slider-floor-sector'></div><div class='slider-floor-inner'>"+currentfloortemp+"<div class='slider-floor-rotate' id='slider-rotate'><div class='floor-rotate-pointer'></div></div></div></div></div>"
		/*Rotating slider*/
		var startPoint
		var currentPoint
		var finalPoint
		var elrotate = document.getElementById('slider-rotate')
		elrotate.addEventListener('mousedown',mouseDown)
		elrotate.addEventListener('mouseup',mouseUp)
		var currentTransform = elrotate.style.transform
		// var degree = -130
		var degree
		// elrotate.style.transform = currentTransform+ " rotate("+degree+"deg)"

		function mouseDown(event){
					this.style.backgroundColor = 'rgba(200,100,50,0.5)'
				startPoint = {
					x: event.x,
					y: event.y
				}
				// console.log('startPoint')
				// console.log(startPoint)
				// console.log(x+' : '+y)
				elrotate.addEventListener('mousemove',mouseMove)
		}

		function mouseMove(event){
			this.style.backgroundColor = 'rgba(100,100,200,0.5)'
					currentPoint = {
						x: event.x,
						y: event.y
					}
					// console.log('currentPoint')
					// console.log(currentPoint)
					degree = Math.atan2(currentPoint.y - startPoint.y, currentPoint.x - startPoint.x) * 180.0 / Math.PI
					elrotate.style.transform = currentTransform+ " rotate("+degree+"deg)"
		}

		function mouseUp(event){
			this.style.backgroundColor = 'rgba(100,200,50,0.5)'
			finalPoint = {
				x: event.x,
				y: event.y
			}
			// console.log('finalPoint')
			// console.log(finalPoint)
			elrotate.removeEventListener('mousemove',mouseMove)
		}

	}

/*

var startPoint
var defaultTransform = document.getElementById("rotator").style.transform

function mouseMove(event) {
	var el = document.getElementById("rotator")
	
	var endPoint = {
		x: event.x,
		y: event.y
	}
	var degree = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) * 180.0 / Math.PI
	if (degree )
	el.style.transform = defaultTransform + " rotate("+degree+"deg)"
}

function mouseDown(event) {
	startPoint = {
		x: event.x,
		y: event.y
	}

	document.addEventListener("mousemove", mouseMove);
	document.addEventListener("mouseup", mouseUp);
}

function mouseUp(event) {
	document.removeEventListener("mousemove", mouseMove)
}

document.getElementById("rotator").addEventListener("mousedown", mouseDown);
*/


	else if(type == 'lamp'){
		popupmenu.innerHTML="<div class='device-menupart active'>Вручную</div><div class='device-menupart'>Дневной свет</div><div class='device-menupart'>Вечерний свет</div><div class='device-menupart'>Рассвет</div>"
		popupslider.innerHTML="<input type='range' class='slider slider-lamp' min='10' max='100' value='75'/>"
	}
	else if(type == 'temp'){
		if(currenttemp){popupinfo.innerHTML= "<div id='popup-info-temp'>"+currenttemp+"</div><div class='"+info+"'/>"}
		popupmenu.innerHTML="<div class='device-menupart active'>Вручную</div><div class='device-menupart'>Холодно</div><div class='device-menupart'>Тепло</div><div class='device-menupart'>Жарко</div>"
		popupslider.innerHTML="<input type='range' class='slider slider-temp' min='-10' max='30' value='23' step='1' onchange='showTemp(event)'/>"
	}
	else{
		popupslider.innerHTML="<p class='alert'>Настройки управления устройством не обнаружены</p>"
	}
	if(popupmenu.innerHTML==""){popupmenu.style.display="none"}
		else{popupmenu.style.display="block"}
}
function deviceHidePopup(event){
	var el = document.getElementById('popup')
	var elform = document.getElementById('popup-form')
	var currentel = event.currentTarget
	var currentid = currentel.id
	if(currentid == 'popup-apply'){
		elform.setAttribute('class','applypopup')
		el.setAttribute('class','overlay fadeout')
		setTimeout(function(){el.style.display='none'},800)
	}
	if(currentid == 'popup-close'){
		elform.setAttribute('class','cancelpopup')
		el.setAttribute('class','overlay fadeout')
		setTimeout(function(){el.style.display='none'},800)
	}
	// el.setAttribute('class','overlay closepopup')
	// var elanimation = el.animate([
	//   {opacity:1},
	//   {opacity:0}
	// ], 400);

	// elanimation.onfinish = function(){
	// 	el.style.display="none"
	// }
	// el.addEventListener('transitionend', onTransitionEnd, false)

	// function onTransitionEnd(){
	// 	el.style.display="none"
	// }
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

