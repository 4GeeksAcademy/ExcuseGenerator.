/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

window.onload = () =>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });

let who = ["Pikachu", "Batman", "Doraemon", "Mi ex"];
let action = ["se golpeò", "rompiò", "ensuciò", "se comio"];
let what = ["los dioses", "mi loro", "las estrellas"];
let when = [
  "mientras estaba con Leo Messi",
  "mientras estaba en Gran Hermano",
  "cuando quedé con el Papa",
  "antes de clase",
  "mientras rezaba"
];

function excuseGenerator() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return (
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + "."
  );
}
