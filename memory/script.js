let backgroundImages = [];
let flippedCards = [];
let imageNumber = 0;

//creates "imageNumber" backgroundImages and displays them
function submitClicked(){
    imageNumber = document.getElementById("number").value*2;
    document.getElementById("subtitle").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    for (let i = 0; i < imageNumber; i++) {
        let carta = document.createElement("img");
        carta.src = src="carta_retro.jpg";
        carta.id = id="img"+i;
        carta.className = "cards";
        carta.setAttribute("onclick", "imageHandler(this.id)");
        document.getElementById('immagini').appendChild(carta);
    }
    fetchStuff()
} 


function fetchStuff(){
    let index = imageNumber/2;
    while(index>0){
        index -= 10;
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            return response.json();
        })
        .then(response => {
            if(index < 10){
                for (let i = 0; i < imageNumber/2; i++) {
                    backgroundImages.push(response[i].url)
                    backgroundImages.push(response[i].url)
                }
            }
            else for (let i = 0; i < 10; i++) {
                backgroundImages.push(response[i].url)
                backgroundImages.push(response[i].url)
            }
            backgroundImages.sort(() => Math.random() - 0.5);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
}

function insertImage(url, n){
    var newImg = document.createElement("img");
    newImg.src = url;
    newImg.className = "cards";
    newImg.id = "card" + flippedCards.length/2

    let precImage = document.getElementById("img" + n);

    precImage.replaceWith(newImg)

    flippedCards.push(newImg);
    flippedCards.push(precImage)

    if(flippedCards.length>=4){
        handleImagePicker()
    }
}

function imageHandler(id){
    if(flippedCards.length<4) 
        insertImage(backgroundImages[Number(id.substring(3))], Number(id.substring(3)))
}

function handleImagePicker(){
    setTimeout(() => {
        if(flippedCards[0].currentSrc == flippedCards[2].currentSrc){
            var newImg0 = document.createElement("img");
            newImg0.src = "carta_retro_bw.jpg";
            newImg0.className = "cards";
            newImg0.id = "cardBW"

            var newImg1 = document.createElement("img");
            newImg1.src = "carta_retro_bw.jpg";
            newImg1.className = "cards";
            newImg1.id = "cardBW"
            flippedCards[0].replaceWith(newImg0)
            flippedCards[2].replaceWith(newImg1)
        }
        else{
            flippedCards[0].replaceWith(flippedCards[1])
            flippedCards[2].replaceWith(flippedCards[3])
        }
        while(flippedCards.length > 0) {
            flippedCards.pop();
        }
    }, 1000);
}

