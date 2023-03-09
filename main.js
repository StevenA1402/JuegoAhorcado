let completar = document.getElementById("Completar");

const palabras = [
  "queso",
  "gato",
  "moño",
  "uña",
  "carro",
  "paranguaturimicuaro",
  "abducir",
  "sapo",
  "correr",
  "ñero",
];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let guiones = palabra.replace(/./g, "_ ");

document.getElementById("boton").addEventListener("click", (e) => {
  completar.innerHTML = `            <div id="palabrasGuiones" class=" flex items-center justify-center pb-[6rem] text-white font-bold text-[4rem]"  >
    ${guiones}</div>
     <input maxlength="1" id="letra" class="bg-white" type="text">
     <button id="boton2" class="bg-neutral-50" >Comprobar</button>
     
    `;

  let palabrasGuiones = document.getElementById("palabrasGuiones");

  let contador = 0;
  let letra = "";
  let getLetter = document.getElementById("letra");
  let perdiste = document.getElementById("perdiste");
  let fallaste = true;
  let boton2 = document.getElementById("boton2");

  boton2.addEventListener("click", () => {
    letra = getLetter.value;
    for (let i in palabra) {
      if (letra == palabra[i]) {
        guiones =
          guiones.substring(0, i * 2) + letra + guiones.substring(i * 2 + 1);
        fallaste = false;
      }
    }
    palabrasGuiones.innerHTML = `${guiones}`;

    if (fallaste) {
      contador++;
      document.getElementById("ahorcado").style.backgroundPosition =
        -(200 * contador) + "px 0 ";
      if (contador == 5) {
        perdiste.innerHTML = `<p>GAME OVER</p>`;
      }
    } else {
      if (guiones.indexOf("_") < 0) {
        perdiste.innerHTML = `<p>VICTORIA </p>`;
      }
    }
    
  });
});
