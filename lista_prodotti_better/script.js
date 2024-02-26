let prodotti = [];

function showProducts() {
    let s = ''
    prodotti.forEach(prodotto => {
        s += '<div>'+ prodotto.codice + ' ' + prodotto.nome
        + ' ' + prodotto.descrizione + ' ' + prodotto.prezzo + '</div>'
    });
    document.getElementById('modal-content').innerHTML = s
}

function addProduct(product) {
    prodotti.push(product)
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

function validateMyForm(){
    const form = document.querySelector('#myForm');

    var radioButtonGroup = document.getElementsByName("sconto");
    var radiob = Array.from(radioButtonGroup).find(
        (radio) => radio.checked
     );
    
    product = {
        categoria: form.querySelector('#categoria').value,
        codice: form.querySelector('#codice').value,
        nome: form.querySelector('#nome').value,
        descrizione: form.querySelector('#descrizione').value,
        prezzo: form.querySelector('#prezzo').value,
        sconto: radiob.value,
        inMagazzino: form.querySelector('#inMagazzino').checked
    };
    addProduct(product)
  }