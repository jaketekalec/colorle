function randColor() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);

	return [r,g,b];
}

function toRGBString(c) {
	return 'rgb('+c[0]+','+c[1]+','+c[2]+')'
}

function toHexString(c) {
	let r = padHex(c[0].toString(16))
	let g = padHex(c[1].toString(16))
	let b = padHex(c[2].toString(16))

	return '#'+r+g+b;
}

function padHex(n) {
	return n.length == 2 ? n : '0'+n
}

function hexToArr(c) {
	if(c[0]=='#') {
		c = c.substring(1)
	}

	let r = parseInt(c.substring(0,2),16);
	let g = parseInt(c.substring(2,4),16);
	let b = parseInt(c.substring(4,6),16);

	return [r,g,b]
}

function colorDist(c1,c2) {
	console.log(c1,c2)
	return Math.sqrt(Math.pow(c1[0]-c2[0],2)+Math.pow(c1[1]-c2[1],2)+Math.pow(c1[2]-c2[2],2))
}

function getDist(e) {
	if(event.key != 'Enter') return;
	let g = hexToArr(document.getElementById("guess").value);
	let a = hexToArr(document.getElementById("answer").value);

	let table = document.getElementById("guesses")
	let row = document.createElement("tr");
	let guessData = document.createElement("td");
	let distData = document.createElement("td");

	let dist = colorDist(g,a).toFixed(2);

	guessData.innerHTML = toHexString(g);
	distData.innerHTML = dist;

	document.getElementById("dist").value = dist;

	row.appendChild(guessData);
	row.appendChild(distData);

	table.prepend(row);
}

window.onload = function main() {
	let c = randColor();
	let cStr = toHexString(c);
	let ansElem = document.getElementById("answer");
	let guessElem = document.getElementById("guess")
	ansElem.value = cStr;
	//document.getElementById("guess").value = toHexString(hexToArr(cStr));
	document.getElementById("dist").value = colorDist(c,c);
	document.body.style.backgroundColor = cStr;
}

