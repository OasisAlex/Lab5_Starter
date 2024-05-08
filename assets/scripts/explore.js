// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelector = document.querySelector('#voice-select');
  const inputText = document.querySelector('textarea');
  const pressTalk = document.querySelector('button');
  const imgChange = document.querySelector('img');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelector.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  populateVoiceList();

  pressTalk.addEventListener('click', speakText);

  function speakText(e) {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedOption =
    voiceSelector.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    utterThis.onstart = function(){
      imgChange.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = function() {
      imgChange.src = "assets/images/smiling.png"; // Revert to the original image
    };

    synth.speak(utterThis);
  }

}