export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen: "assets/img/1.png",
  },
  {
    idFoto: 2,
    imagen: "assets/img/2.png",
  },
  {
    idFoto: 3,
    imagen: "assets/img/3.png",
  },
  {
    idFoto: 4,
    imagen: "assets/img/4.png",
  },
  {
    idFoto: 5,
    imagen: "assets/img/5.png",
  },
  {
    idFoto: 6,
    imagen: "assets/img/6.png",
  },
];

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const nuevoArray = infoCartas.map((carta) => {
    return {
      ...carta,
      estaVuelta: false,
      encontrada: false,
    };
  });
  const duplicarCartasArray = [...nuevoArray, ...nuevoArray];
  const cartasIndependientes = duplicarCartasArray.map((carta) => ({ ...carta }));
  return cartasIndependientes;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
