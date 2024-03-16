let speech = new SpeechSynthesisUtterance();


// to add different language
let language = [];
let languageSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    language = window.speechSynthesis.getVoices();
    speech.voice = language[0];

// for dropdown
    language.forEach((voice,i) => (languageSelect.options[i] = new Option(voice.name,i)))
};

languageSelect.addEventListener("change", () => {
    speech.voice = language[languageSelect.value];
})

// only to get voice

const voice = document.getElementById("btn");
const write = document.getElementById("text");

voice.addEventListener("click", function(){
    speech.text = write.value;
    window.speechSynthesis.speak(speech);
});