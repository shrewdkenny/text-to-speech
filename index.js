let speech = new SpeechSynthesisUtterance();
const button = document.getElementById("btn");
const textArea = document.getElementById("textArea");

button.addEventListener("click", function () {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
