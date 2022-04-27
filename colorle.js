function randColor() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);

	return [r,g,b];
}

function toRGBString(c) {
	return 'rgb('+c[0]+','+c[1]+','+c[2]+')'
}

function colorDist(c1,c2) {
	return Math.sqrt(Math.pow(c1[0]-c2[0],2)+Math.pow(c1[1]-c2[1],2)+Math.pow(c1[2]-c2[2],2))
}

window.onload = function main() {
	let c = randColor();
	cStr = toRGBString(c)
	document.getElementById("answer").value = cStr;
	document.body.style.backgroundColor = cStr;
}