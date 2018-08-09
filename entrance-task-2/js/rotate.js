
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
