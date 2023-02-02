var vetor = ["Ana".toLowerCase, "Eduardo".toLowerCase, "Emely".toLowerCase, 
"Vitória".toLowerCase, "Isaac".toLowerCase, "sapo".toLowerCase,'AÉ'.toLowerCase];

function cadastrar(){
    var pessoa= document.getElementById('aé').value
var bancoDeDados= JSON.parse(localStorage.getItem("bancoDeDados"));
}
function inserir(){

}

function carregarItensVetor() {
    var aiai = document.getElementById("mostrar");
    var i = 0;
    while (i < vetor.length) {
        // document.write(vetor[i]+"<br>");
        var texto = document.createElement("p");
        texto.innerHTML = vetor[i];
        aiai.appendChild(texto)
        i++
    }
    // var mostra=""
    // for(var i=0;i<vetor.length;i++){
    //     mostra=+vetor[i]+"<br>"
    // }  
    // document.getElementById("mostrar").innerHTML=mostra 
}
carregarItensVetor();

function limparDivprincipal() {
    var div = document.getElementById("mostrar");
    while (div.firstChild) {
        div.removeChild(div.firstChild);

    }
}

function buscar() {
    limparDivprincipal();
    var textoPes = document.getElementById("palavra").value;
    var div = document.getElementById("mostrar");
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i].includes(textoPes)) {
            var texto = document.createElement("p");
            texto.innerHTML = vetor[i];
            div.appendChild(texto);
        }
    }

}