window.addEventListener('keydown', function(e){
    const audio = document.querySelector('audio[data-key='+ e.key + ']');
    const key = document.querySelector('.key[data-key='+ e.key + ']');
    if (!audio) return; //Stoping the function if it isnt a valid key
    audio.currentTime = 0; //rewind to the start of the sound
    audio.play();
    console.log(key);
    key.classList.add('playing');
})

window.addEventListener('keyup', function(e){
    const audio = document.querySelector('audio[data-key='+ e.key + ']');
    const key = document.querySelector('.key[data-key='+ e.key + ']');
    if (!audio) return; //Stoping the function if it isnt a valid key
    console.log(key);
    key.classList.remove('playing');
})