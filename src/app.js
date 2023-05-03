/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 4);
    return random;
  };

  const excuseGenerator = () => {
    const who = ["My ex", "Batman", "Pikachu", "Doraemon"];
    const action = ["orinó", "aplastó", "discutió", "golpeó"];
    const what = [
      "mi corazon",
      "mi Ferrari",
      "mi camiseta favorita",
      "las estrellas"
    ];
    const when = [
      "mientras estaba en la ducha",
      "durante la hora de la siesta",
      "mientras estaba en Gran Hermano",
      "cuando me visitó Leo Messi"
    ];

    return `${who[randomNumber()]} ${action[randomNumber()]} ${
      what[randomNumber()]
    } ${when[randomNumber()]}`;
  };
};
