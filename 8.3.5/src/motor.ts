import { Carta, cartas, Tablero } from "./model";

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
    tablero.estadoPartida === "CeroCartasLevantadas" ||
    tablero.estadoPartida === "UnaCartaLevantada"
  ) {
    if (
      tablero.cartas[indice].encontrada === false &&
      tablero.cartas[indice].estaVuelta === false
    ) {
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.indiceCartaVolteadaA === indice;
  if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.estadoPartida = "DosCartasLevantadas";
  } else {
    tablero.estadoPartida = "UnaCartaLevantada";
  }
  console.log(tablero.estadoPartida);
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  tablero.indiceCartaVolteadaA = tablero.cartas[indiceA].idFoto;
  tablero.indiceCartaVolteadaB = tablero.cartas[indiceB].idFoto;
  if (tablero.indiceCartaVolteadaA === tablero.indiceCartaVolteadaB) {
    return true;
  } else {
    return false;
  }
};

export const parejaEncontrada = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  const quedanPorEncontrar = tablero.cartas.some(
    (carta) => carta.encontrada !== false
  );
  if (quedanPorEncontrar) {
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  const quedanPorEncontrar: boolean = tablero.cartas.every(
    (carta) => carta.encontrada === true
  );
  return quedanPorEncontrar;
};
