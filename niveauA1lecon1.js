let lettre = document.getElementById("letterA");
let myAudio = document.createElement("audio");
audio.src = "./aDemainmp3";
// let audio = document.getElementById("audioA");
console.log(lettre);

lettre.style = "color:red";

lettre.addEventListener("click", () => {
  myAudio.play();
});
