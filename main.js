let completar = document.getElementById("Completar");
let letraRepetida = [];
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
let boton = document.getElementById("boton");
let historial = document.getElementById("lista")
let fallaste = true;
boton.addEventListener("click", (e) => {
  completar.innerHTML = `            <div id="palabrasGuiones" hidden class=" flex items-center justify-center pb-[6rem] text-white font-bold text-[4rem]"  >
    ${guiones}</div>
     <input   maxlength="1"  id="letra" class="bg-white" type="text">
     <button id="boton2"   class=" w-[15rem] h-[4rem] hover:bg-white hover:text-black text-[2rem] font-bold bg-lime-500	  rounded-md" >Comprobar</button>
     
    `;

  letra = document.getElementById('letra')
  letra.addEventListener("input", () => {

  });
  let contador = 0;
  let palabrasGuiones = document.getElementById("palabrasGuiones");
  let getLetter = document.getElementById("letra");
  let perdiste = document.getElementById("perdiste");
  let boton2 = document.getElementById("boton2");
  let reinicio = document.getElementById("reinicio");

  reinicio.hidden = false;
  boton.hidden = true;



  const contadorFallos = (fallaste) => {
    if (fallaste) {
      contador++;
      document.getElementById("ahorcado").style.backgroundPosition =
        -(270 * contador) + "px 0 ";
      if (contador == 4) {
        perdiste.innerHTML = `<p class="text-red-600">GAME OVER</p>
        <p class="text-center text-[1rem] ">La palabra es:   <p class="font-bold text-lime-400 text-center text-[1rem] ">${palabra}</p></p>`;
      }
    } else {
      if (guiones.indexOf("_") < 0) {
        perdiste.innerHTML = `<p class="text-lime-400">VICTORIA </p>`;
      }
    }
  }

  const fallo = (fallaste, letra) => {
    for (let i in palabra) {
      if (letra == palabra[i]) {
        guiones =
          guiones.substring(0, i * 2) + letra + guiones.substring(i * 2 + 1);
        fallaste = false;

      }
    }

    for (let i = 0; i < letraRepetida.length; i++) {
      if (letraRepetida[i].includes(letra)) {
        fallaste = true;
        break;
      }
    }

    contadorFallos(fallaste)
  };

  boton2.addEventListener("click", () => {
    letra = getLetter.value;
    fallo(fallaste, letra)

    historial.innerHTML += `<p class="font-bold text-[1.5rem] text-white"> Has usado la letra: ${letra}</p>`
    letraRepetida.push(guiones);
    getLetter.value = "";
    getLetter.focus();

  });

  reinicio.addEventListener("click", () => {
    window.location.reload();
  });


  getLetter.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      historial.innerHTML +=`<p class="font-bold text-[1.5rem] text-white"> Has usado la letra: ${getLetter.value}</p>`
      letraRepetida.push(guiones);
      fallo(fallaste, getLetter.value)
      getLetter.value = "";
      getLetter.focus();
      palabrasGuiones.innerHTML = `${guiones}`; 
    }

  });

});
