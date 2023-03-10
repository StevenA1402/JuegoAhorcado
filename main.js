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
let boton = document.getElementById("boton")
boton.addEventListener("click", (e) => {
  completar.innerHTML = `            <div id="palabrasGuiones" hidden class=" flex items-center justify-center pb-[6rem] text-white font-bold text-[4rem]"  >
    ${guiones}</div>
     <input maxlength="1"  id="letra" class="bg-white" type="text">
     <button id="boton2"  class="bg-neutral-50" >Comprobar</button>
     
    `;



  let contador = 0;
  let letra = "";
  let palabrasGuiones = document.getElementById("palabrasGuiones");
  let getLetter = document.getElementById("letra");
  let perdiste = document.getElementById("perdiste");
  let boton2 = document.getElementById("boton2");
  let reinicio = document.getElementById('reinicio');
  let siguiente = document.getElementById('siguiente');

  reinicio.hidden = false
  siguiente.hidden = false
  boton.hidden = true

  boton2.addEventListener("click", () => {
    let fallaste = true;
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
      if (contador == 4) {
        fallaste = true;

        perdiste.innerHTML = `<p>GAME OVER</p>`;
      }
    } else {
      if (guiones.indexOf("_") < 0) {
        fallaste = true;
        perdiste.innerHTML = `<p>VICTORIA </p>`;
      }
    }
    getLetter.value = "";
    getLetter.focus();
  });
 
  reinicio.addEventListener ('click' , () => {

    window.location.reload()
  });


  siguiente.addEventListener ('click' , () => {
      palabra = palabras[Math.floor(Math.random() * palabras.length)];
      guiones = palabra.replace(/./g, "_ ");
      completar.innerHTML = `            <div id="palabrasGuiones" class=" flex items-center justify-center pb-[6rem] text-white font-bold text-[4rem]"  >
    ${guiones}</div>
     <input maxlength="1" id="letra" class="bg-white" type="text">
     <button id="boton2" class="bg-neutral-50" >Comprobar</button>
     
    `;
      document.getElementById("ahorcado").style.backgroundPosition = 0 + "px 0 ";
      getLetter.value = "";
      getLetter.focus();
      perdiste.innerHTML = ``;

  });


});

