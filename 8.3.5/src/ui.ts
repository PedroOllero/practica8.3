import { Carta, tablero } from "./model";
import { iniciarPartida, parejaEncontrada, voltearLaCarta } from "./motor";


export const iniciarButtonHandler = () => {
  const iniciarButton = document.getElementById("iniciarPartida");
  if (iniciarButton && iniciarButton instanceof HTMLButtonElement) {
    iniciarButton.addEventListener("click", () => {
      iniciarPartida(tablero);
      imprimirCartas(tablero.cartas);
    });
  }
};

const imprimirCartas = (cartasBarajadas: Carta[]) => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas) {
    cartas.forEach((carta) => {
      if (carta && carta instanceof HTMLImageElement) {
        let indice: number = parseInt(carta.id);
        if (!isNaN(indice) && tablero.cartas[indice]) {
          carta.src = tablero.cartas[indice].imagen.toString();
        } else {
          console.error("Índice inválido o carta no encontrada:", indice);
        }
      }
    });
  }
};

export const pulsar = () => {
    const cartas = document.querySelectorAll(".carta");
    if (cartas) {
        cartas.forEach((carta) => {
            if (carta && carta instanceof HTMLImageElement) {
                let indice: number = parseInt(carta.id);
                carta.addEventListener("click", () => {
                    voltearLaCarta(tablero, indice);
                    voltearEstiloOn(carta);
                });
            }
        });
    }
};

export const voltearEstiloOn = (objeto: any) => {
  objeto.setAttribute("style", "opacity: 1");
};

export const voltearEstiloOff = (objeto: any) => {
    objeto.setAttribute("style", "opacity: 1");
  };


