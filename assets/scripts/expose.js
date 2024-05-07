// expose.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  const imageSelector = document.getElementById('horn-select');
  const imageDisplay = document.querySelector('img');
  const soundSelector = document.querySelector('audio');
  const volumeSelector = document.getElementById('volume-controls');
  const soundPlayer = document.querySelector('button');

  const volumeInput = volumeSelector.querySelector('input');  // More specific selector for input
  const volumePic = volumeSelector.querySelector('img');      // More specific selector for img
  const jsConfetti = new JSConfetti();

  volumeInput.addEventListener("input", updateVolume);

  function updateVolume(e) {  

      if (e.target.value == 0){
        volumePic.src = "assets/icons/volume-level-0.svg";
        soundSelector.volume = 0;
      }
      else if (e.target.value > 0 && e.target.value <= 33) {
        volumePic.src = "assets/icons/volume-level-1.svg";
        soundSelector.volume = 0.3;
      }
      else if (e.target.value > 33 && e.target.value <= 67){
        volumePic.src = "assets/icons/volume-level-2.svg";
        soundSelector.volume = 0.6;
      }
      else {
        volumePic.src = "assets/icons/volume-level-3.svg";
        soundSelector.volume = 1;
      }
  }

  imageSelector.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      imageDisplay.src = "assets/images/air-horn.svg";
      imageDisplay.alt = "air horn";
      soundSelector.src = "assets/audio/air-horn.mp3";
    } else if ( event.target.value == "car-horn")
    {
        imageDisplay.src = "assets/images/car-horn.svg";
        imageDisplay.alt = "car horn";
        soundSelector.src = "assets/audio/car-horn.mp3";
      }
    else if ( event.target.value == "party-horn")
    {
      imageDisplay.src = "assets/images/party-horn.svg";
      imageDisplay.alt = "party horn";
      soundSelector.src =  "assets/audio/party-horn.mp3";
    }
  })

  soundPlayer.addEventListener('click', soundPlay);

  function soundPlay(e) {
    if (soundSelector.src) {
      soundSelector.play();
      if (imageSelector.value === "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  }

}