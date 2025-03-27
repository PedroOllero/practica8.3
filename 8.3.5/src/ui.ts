import { Carta, tablero } from "./model";
import { iniciarPartida, parejaEncontrada, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

export const iniciarButtonHandler = () => {
  const iniciarButton = document.getElementById("iniciarPartida");
  if (iniciarButton && iniciarButton instanceof HTMLButtonElement) {
    iniciarButton.addEventListener("click", () => {
      iniciarPartida(tablero);
    });
  }
};

const mostrarImagen = (indice: number) => {
  const imageContainer = document.querySelector(`img[data-id-imagen="${indice}"]`);
  if(imageContainer && imageContainer instanceof HTMLImageElement) {
    imageContainer.src = tablero.cartas[indice].imagen;
  } else {
    console.error("No encontró la imagen")
  }
}

export const quitarImagen = (indice: number) => {
  const imageContainer = document.querySelector(`img[data-id-imagen="${indice}"]`);
  if(imageContainer && imageContainer instanceof HTMLImageElement) {
    imageContainer.src = "";
  } else {
    console.error("No encontró la imagen")
  }
}

export const pulsar = (indice: number, div: HTMLDivElement) => {
   if(tablero.estadoPartida === "PartidaNoIniciada") {
    alert("La partida no ha sido iniciada");
    return;
   }

   if(tablero.cartas[indice].estaVuelta === true){
    alert("Carta ya volteada")
   }

   if (tablero.estadoPartida === "CeroCartasLevantadas" || tablero.estadoPartida === "UnaCartaLevantada") {
      voltearLaCarta(tablero,indice);
      mostrarImagen(indice);
      console.log(tablero)
   }

};

const efectoGiro = (div: HTMLDivElement) => {
  div.classList.add('carta-volteada');
}

export const efectoGiroQuitar = (div: HTMLDivElement) => {
  div.classList.remove('carta-volteada');
}

export const crearTablero = () => {
  const tableroContainer = document.getElementById("main");

  if(tableroContainer && tableroContainer instanceof HTMLDivElement) {
    tablero.cartas.forEach((carta, indice) => {
      const div = document.querySelector(`div[data-id-carta="${indice}"]`);
      
      if(div && div instanceof HTMLDivElement) {
        div.addEventListener('click', () => {
          pulsar(indice, div);
        })
      }
    })
  } else {
    console.error("No existe el main")
  }
}

export const aparecerTitulo = () => {
  let titulo = document.getElementById("titulo");
  if(titulo && titulo instanceof HTMLHeadingElement){
    titulo.setAttribute("style","opacity: 1")
  }
}

export const imprimirContadorIntentos = (texto: string) =>{
  let cajaIntentos = document.getElementById("intentos")
  if(cajaIntentos && cajaIntentos instanceof HTMLHeadingElement){
    cajaIntentos.textContent = texto
  }
}