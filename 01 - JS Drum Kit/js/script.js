function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //if it's null, ends the functions

    audio.currentTime = 0; //used to refresh the sound in case of multiple key hits
    audio.play(); //check audio dom for more information about audio

    key.classList.add('playing');

}

function removeTransition(e) {
     //we just want the transform property and then after transform happens, we remove the class
    if (e.propertyName !== "transform")  return; 

    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);