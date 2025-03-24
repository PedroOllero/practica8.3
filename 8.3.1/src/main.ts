const shuffleArray = (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6];
console.log(shuffleArray(numeros));