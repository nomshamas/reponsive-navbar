const btn = document.querySelector('.btn');

btn.onclick = function() {
	const nav = document.querySelector('.nav');
	nav.classList.toggle('activee');

	if(nav.classList.contains('activee')) {
		document.querySelector('.icon').textContent = "☰";
	}
	else {
		document.querySelector('.icon').textContent = "X";
	}
}