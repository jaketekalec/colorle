function randColor() {
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);

	return 'rgb('+r+','+g+','+b+')';
}

window.onload = function main() {
	let c = randColor();
	document.getElementById("guess").value = c;
	document.body.style.backgroundColor = c
}