import { Carta, cartas, Tablero } from "./model";
import { aparecerTitulo, imprimirContadorIntentos, quitarImagen } from "./ui";

const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

export const iniciarPartida = (tablero: Tablero): void => {
  tablero.cartas = barajarCartas(cartas);
  tablero.estadoPartida = "CeroCartasLevantadas";
  console.log(tablero.cartas);
};

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (
    indice >= 0 &&
    indice < tablero.cartas.length &&
    (tablero.estadoPartida === "CeroCartasLevantadas" ||
      tablero.estadoPartida === "UnaCartaLevantada") &&
    tablero.cartas[indice].estaVuelta === false &&
    tablero.cartas[indice].encontrada === false
  ) {
    return true;
  }
  return false;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if((sePuedeVoltearLaCarta(tablero,indice)) === true){
    if(tablero.estadoPartida === "CeroCartasLevantadas"){
      tablero.cartas[indice].estaVuelta = true
      tablero.indiceCartaVolteadaA = indice
      tablero.estadoPartida = "UnaCartaLevantada"
      return;
    }
    if(tablero.estadoPartida === "UnaCartaLevantada"){
      tablero.cartas[indice].estaVuelta = true
      tablero.indiceCartaVolteadaB = indice
      tablero.estadoPartida = "DosCartasLevantadas"
      if(tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB){
        gameHandler(tablero.indiceCartaVolteadaA,tablero.indiceCartaVolteadaB, tablero)
        
      }
    }
  }else{
    console.log("No se puede girar")
  }
};

const gameHandler = (indiceA: number, indiceB: number, tablero: Tablero) => {
  if (sonPareja(indiceA, indiceB, tablero) === true) {
    parejaEncontrada(indiceA, indiceB, tablero);
  }
  if (sonPareja(indiceA, indiceB, tablero) === false) {
    parejaNoEncontrada(indiceA, indiceB, tablero);
  }

  console.log(
    "gamehandler",
    sonPareja(indiceA, indiceB, tablero),
    tablero.cartas[indiceA].idFoto,
    tablero.cartas[indiceB].idFoto
  );
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;

export const parejaEncontrada = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): void => {
  sumadorContadorIntento()
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = true;
  tablero.cartas[indiceB].estaVuelta = true;
  console.log("Pareja encontrada", indiceA, indiceB);
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
  finalPartida(tablero)
};

export const parejaNoEncontrada = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): void => {
  sumadorContadorIntento()
  console.log("Pareja NO encontrada", indiceA, indiceB);
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  setTimeout(() => {
    quitarImagen(indiceA);
    quitarImagen(indiceB);
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.estadoPartida = "CeroCartasLevantadas";
    console.log(tablero)
  }, 2000);
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  const quedanPorEncontrar: boolean = tablero.cartas.every(
    (carta) => carta.encontrada === true
  );
  return quedanPorEncontrar;
};

const finalPartida = (tablero: Tablero) => {
  if(esPartidaCompleta(tablero) === true){
    tablero.estadoPartida = "PartidaCompleta"
    aparecerTitulo()
  }
}

let contadorIntentos: number = 0

const sumadorContadorIntento = () => {
  contadorIntentos++
  console.log("ContadorIntentos", contadorIntentos)
  if(contadorIntentos > 0){
    let texto: string = `Llevas ${contadorIntentos} intentos`
    imprimirContadorIntentos(texto)
  }else{
    let texto: string = `Todavía no lo has intentado`
    imprimirContadorIntentos(texto)
  }
}