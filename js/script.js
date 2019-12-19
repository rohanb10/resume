var sections, wave, navbar;

document.addEventListener('DOMContentLoaded', function() {
	sections = document.querySelectorAll('.section-title');
	navbar = document.getElementById('navigation');
	startWave();
	for (var i = 0; i < sections.length; i++){
		sections[i].onmouseover = function() {
			killWave();
		}
		sections[i].onmouseout = function() {
			if (navbar.classList.length === 0) {
				startWave();
			}
		}
	}
}, false);

// WAVES
	function ripple(sections) {
		for (var i = 0; i < sections.length; i++) {
			setTimeout(waveUp, 150 * i, sections[i]);
			setTimeout(waveDown, (sections.length * 150) + (200 * i), sections[i]);
		}
	}

	function waveUp(section) {
		section.classList.add('wave');
	}
	function waveDown(section) {
		section.classList.remove('wave');
	}
	function startWave() {
		clearInterval(wave);
		wave = setInterval(ripple, 4000, sections);
	}

	function killWave() {
		clearInterval(wave);
		for (var i = 0; i < sections.length; i++) {
			sections[i].classList.remove('wave');
		}
	}

function openNav(element, sectionName) {
	var navbar = document.getElementById('navigation');
	navbar.classList = [];
	killWave();
	if (!element.classList.contains('focused')) {
		navbar.classList.add(element.classList[1]);
		for (var i = 0; i < sections.length; i++) {
			sections[i].classList.remove('focused');
		}
		element.classList.add('focused');
	} else {
		startWave();
		element.classList.remove('focused');
	}
}