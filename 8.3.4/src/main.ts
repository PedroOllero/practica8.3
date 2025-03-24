const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const cardhandler1 = () => {
    const card1 = document.getElementById("carta1")
    if(card1 && card1 instanceof HTMLImageElement){
        card1.addEventListener("click", () => {
            card1.src= "/assets/img/1.png"
        })
    }
}

const cardhandler2 = () => {
    const card2 = document.getElementById("carta2")
    if(card2 && card2 instanceof HTMLImageElement){
        card2.addEventListener("click", () => {
            card2.src= "/assets/img/2.png"
        })
    }
}


cardhandler1();
cardhandler2();