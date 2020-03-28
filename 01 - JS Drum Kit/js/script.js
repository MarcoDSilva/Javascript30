// JAVASCRIPT 
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //if it's null, ends the functions

    audio.currentTime = 0; //used to refresh the sound in case of multiple key hits
    audio.play(); //check audio dom for more information about audio
} );