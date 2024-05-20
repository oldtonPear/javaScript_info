document.getElementById("redValue").textContent = document.getElementById("red").value;
document.getElementById("red").addEventListener("input", (event) => {
    document.getElementById("redValue").textContent = event.target.value;
    updateColor()
});

document.getElementById("blueValue").textContent = document.getElementById("blue").value;
document.getElementById("blue").addEventListener("input", (event) => {
    document.getElementById("blueValue").textContent = event.target.value;
    updateColor()
});

document.getElementById("greenValue").textContent = document.getElementById("green").value;
document.getElementById("green").addEventListener("input", (event) => {
    document.getElementById("greenValue").textContent = event.target.value;
    updateColor()
});

function updateColor(){
    let red = document.getElementById("red").value;
    let blue = document.getElementById("blue").value;
    let green = document.getElementById("green").value;

    let redHex = (+red).toString(16);
    let blueHex = (+blue).toString(16);
    let greenHex = (+green).toString(16);


    if(redHex.length == 1) redHex = '0' + redHex;
    if(blueHex.length == 1) blueHex = '0' + blueHex;
    if(greenHex.length == 1) greenHex = '0' + greenHex;
    document.getElementById("result").innerHTML = 
    '<h1 style="background-color:#'+redHex + blueHex + greenHex +';">RESULT</h1>';
}