import { Carta, tablero } from "./model";
import { iniciarPartida, voltearLaCarta } from "./motor";

document.addEventListener("DOMContentLoaded", () => {
    iniciarButtonHandler();
});

const iniciarButtonHandler = () => {
    const iniciarButton = document.getElementById("iniciarPartida");
    if(iniciarButton && iniciarButton instanceof HTMLButtonElement){
        iniciarButton.addEventListener("click", () => {
            iniciarPartida(tablero)
            imprimirCartas(tablero.cartas);
        })
        
    }
}

const imprimirCartas = (cartasBarajadas: Carta[]) => {
    const cartas = document.querySelectorAll(".carta");
    if(cartas){
        cartas.forEach((carta) => {
            if(carta && carta instanceof HTMLImageElement){
                let indice: number = parseInt(carta.id)
                if (!isNaN(indice) && tablero.cartas[indice]) {
                    carta.src = tablero.cartas[indice].imagen.toString();
                } else {
                    console.error("Índice inválido o carta no encontrada:", indice);
                }
            }
        }
        )
    }
}

const voltearEstilo = (objeto: any) => {
  objeto.setAttribute("style", "opacity: 1")
}

const voltear = () => {
    const cartas = document.querySelectorAll(".carta");
    if (cartas) {
        cartas.forEach((carta) => {
            if (carta && carta instanceof HTMLImageElement) {
                let indice: number = parseInt(carta.id)
                carta.addEventListener("click", () => {
                    voltearEstilo(carta);
                    voltearLaCarta(tablero,indice);
                });
            }
        });
    }
}


voltear();
