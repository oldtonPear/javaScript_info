tema = 'love';
data = getData(tema);
data.works.forEach(element => {
    console.log(element); 
    
    const cosa = {
        name: element.authors[0].name,
        title: element.title
      };
    console.log(cosa.title)
    console.log(cosa.name)
    addCosa(cosa)
});

function addCosa(cosa){
    document.getElementById("cose").innerHTML += ('<div id = "cosa" class="col-sm-3">' + 'immagine qui <br>' + cosa.title + '<br>' + cosa.name + '</div>')
}

function getData(tema){
    const request = new XMLHttpRequest();
    request.open("GET", "https://openlibrary.org/subjects/"+tema+".json?details=true", false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        console.log(JSON.parse(request.responseText));
        return JSON.parse(request.responseText)
    }
    else 
        return null;
    }

async function fetchImage(url) {
    const img = new Image();
    return new Promise((res, rej) => {
        img.onload = () => res(img);
        img.onerror = e => rej(e);
        img.src = url;
    });
}