let immagini = [
    '<img class="animation" src="./assets/images/Drop.png">',
    '<img class="animation" src="./assets/images/Flower.png" >',
    '<img class="animation" src="./assets/images/Hamster.png">',
    '<img class="animation" src="./assets/images/Tree.png">',
]

let interval

function startCarousel() {
    let i=0
    interval = setInterval(() => {
        let linkImage = immagini[i]
        document.getElementById('slider').innerHTML = linkImage
        i++
        if (i == immagini.length) {
            i = 0      
    }            
    }, 1500);
}

function stopCarousel() {
    clearInterval(interval)
    document.getElementById('slider').innerHTML = immagini[0]
}


