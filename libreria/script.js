document.getElementById("btnFavorites").addEventListener("click", buttonClicked);
document.getElementById("btnHorror").addEventListener("click", buttonClicked);
document.getElementById("btnFantasy").addEventListener("click", buttonClicked);
document.getElementById("btnSaggi").addEventListener("click", buttonClicked);
document.getElementById("btnGiallo").addEventListener("click", buttonClicked);

function loadStuff(tema){
    document.getElementById("cose").innerHTML = '';
    data = getData(tema);
    data.works.forEach(element => {
    console.log(element); 
    
    const libro = {
        name: element.authors[0].name,
        title: element.title,
        cover: element.cover_id
      };
    addLibro(libro)
    });
}


function addLibro(libro){
    document.getElementById("cose").innerHTML += 
    '<div id = "cosa" class="col-sm-3">'
    + '<img src="https://covers.openlibrary.org/b/id/' + libro.cover + '-L.jpg" alt="Errore" width="100" height="100">' + '<br>' 
    + '<b style="font-size: smaller">' + libro.title + '</b>' + '<br>' 
    + '<div style="color: rgb(0, 167, 89); font-size: x-small">' + libro.name + '</div>' + '</div>'
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

function buttonClicked(c){
    let s = c.currentTarget.innerHTML
    s = s.toLowerCase();
    document.getElementById("title").innerHTML = '<h2>' + s + '</h2>'
    loadStuff(s)
}