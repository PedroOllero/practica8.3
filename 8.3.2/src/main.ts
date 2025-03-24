const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const cardhandler = () => {
    const card = document.getElementById("carta")
    if(card && card instanceof HTMLImageElement){
        card.addEventListener("click", () => {
            card.src= "/assets/img/1.png"
        })
    }
}

cardhandler();