
function getElementViaClick(e){
	playSound(this);
};

function clearSound(e){
	this.classList.remove('click');
}

function getElementViaKey(e){
	key = document.querySelector(`[data-key="${e.code}"]`);
	playSound(key);
};

function playSound(thisElement) {
	if(thisElement.classList.contains('click')) { thisElement.classList.remove('click');}; // Noticed problem with buttons sometimes sticking, this solves that issue
	thisElement.classList.add('click');
	const sound = document.querySelector(`audio[data-key="${thisElement.dataset.key}"]`);
	const newSound = sound.cloneNode();

	newSound.play();
}

const boxes = document.querySelectorAll('.img-border'); // boxes being the div elements being used as buttons
boxes.forEach( box => {
	box.addEventListener('click', getElementViaClick);
	box.addEventListener('transitionend', clearSound);
});

window.addEventListener('keypress', getElementViaKey);
