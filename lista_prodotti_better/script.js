let prodotti = [];

function showProducts() {
    let s = ''
    let i = 0;
    prodotti.forEach(prodotto => {
        s += '<div style = "margin: 30px">'+ 
        prodotto.codice 
        + ' ' + 
        prodotto.nome
        + ' ' + 
        prodotto.descrizione 
        + ' ' + 
        prodotto.prezzo 
        + 
        '<button type="button" class="btn btn-secondary" style = "float: right" onclick="editProduct('+i+');">Edit</button>' + 
        '<button type="button" class="btn btn-primary" style = "float: right" onclick="deleteProduct('+i+');">Delete</button>' + 
        '</div>';
        i++;
    });
    document.getElementById('modal-content').innerHTML = s
}

function addProduct(product) {
    prodotti.push(product)
    showProducts();
}

function deleteProduct(pos) {
    prodotti.splice(prodotti[pos], 1);
    showProducts();
}

function editProduct(pos){
    var prodotto = prodotti[pos];
    const form = document.querySelector('#myForm');
    form.querySelector('#categoria').value = prodotto.categoria;
    form.querySelector('#codice').value = prodotto.codice;
    form.querySelector('#nome').value = prodotto.nome;
    form.querySelector('#descrizione').value = prodotto.descrizione;
    form.querySelector('#prezzo').value = prodotto.prezzo;
    form.querySelector('#inMagazzino').checked = prodotto.inMagazzino;
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
    var radiob;
    try{
        radiob = Array.from(radioButtonGroup).find(
            (radio) => radio.checked.value
         );
    }catch(error){
        radiob = null;
    }
    
    
    product = {
        categoria: form.querySelector('#categoria').value,
        codice: form.querySelector('#codice').value,
        nome: form.querySelector('#nome').value,
        descrizione: form.querySelector('#descrizione').value,
        prezzo: form.querySelector('#prezzo').value,
        sconto: radiob,
        inMagazzino: form.querySelector('#inMagazzino').checked
    };
    addProduct(product)
  }