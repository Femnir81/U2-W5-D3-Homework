let immagini = [
    '<img src="./assets/images/Drop.png" alt="">',
    '<img src="./assets/images/Flower.png" alt="">',
    '<img src="./assets/images/Hamster.png" alt="">',
    '<img src="./assets/images/Tree.png" alt="">',
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
    }, 1000);
}

function stopCarousel() {
    clearInterval(interval)
    document.getElementById('slider').innerHTML = immagini[0]
}


