let prodotti = [];

function showProducts() {
    let s = ''
    prodotti.forEach(prodotto => {
        s += '<div>'+ prodotto.codice + ' ' + prodotto.nome
        + ' ' + prodotto.descrizione + ' ' + prodotto.prezzo + '</div>'
    });
    document.getElementById('product-list').innerHTML = s
}

function addProduct() {
    prodotti.push(
        product = {
        codice: prompt("Inserisci il codice:"),
        nome: prompt("Inserisci il nome:"),
        descrizione: prompt("Inserisci la descrizione:"),
        prezzo: prompt("Inserisci il prezzo:")
      });
      showProducts();
}

function deleteProduct() {
    let s = prompt("Inserisci il codice dell'elemento da rimuovere:");
    prodotti.forEach(prodotto => {
        if(prodotto.codice === s){
            prodotti.splice(prodotti.indexOf(prodotto), 1);
        }
    });
    showProducts();
}

function sortProducts() {
    prodotti.sort(function(a, b) {
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      
    showProducts();
}