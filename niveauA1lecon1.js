/* audio pour a-l'alphabet */

// let audioAlphabet = document.getElementById("audioAlphabet");
// let titreAlphabet = document.getElementById("titreAlphabet");

// titreAlphabet.addEventListener("mouseover", () => {
//   audioAlphabet.play();
// });

let lettre = document.getElementById("letterA");
let audioA = document.getElementById("audioA");

lettre.addEventListener("click", () => {
  audioA.play();
});
