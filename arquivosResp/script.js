let list = []

function cadastro() {
    var mat = document.getElementById("mat").value
    var n = document.getElementById("nome").value
    var pass = document.getElementById("senha").value
    var s
    if (document.getElementById("m").checked) {
        s = "Masculino"
    }
    else if (document.getElementById("f").checked) {
        s = "Feminino"
    }
    else {
        s = "Não Informado"
    }
    botaoRemove = "<td><button onclick='removeTR(this)' class='btn-danger'>DELETA</button></td>";
    var Pessoa = {
        nome: n,
        senha: pass,
        matricula: mat,
        sexo: s
    }
    list.push(Pessoa)
    atualizaTabela()
    persisteUser(Pessoa)
    telaLogin()
}
function atualizaTabela() {
    var table = document.getElementById("tabela")
    //Deleta todas as linhas da tabela para tirar redundância
    while (table.rows.length > 1) {
        table.deleteRow(1)
    }
    //Para cada pessoa contida na lista, adicione uma nova linha com os dados
    for (Pessoa of list) {
        var linha = "<tr onclick='clica(this)'><td>" + Pessoa.matricula + "</td><td>" + Pessoa.nome + "</td>" + botaoRemove + "<td>" + Pessoa.sexo + "</td></tr>"
        table.innerHTML += linha;
    }

}
function removeTR(id) {
    var indice = id.parentNode.parentNode.rowIndex;
    list.splice((indice - 1), 1)
    atualizaTabela(list,)
}
function telaLogin() {
    document.location.href = 'Login.html'
}
function telaPerfil(){
    document.location.href = 'TelaPerfil.html'
}

function persisteUser(user){
    var usuarios = JSON.parse(localStorage.getItem("usuarios"))
    if(usuarios == null){
        localStorage.setItem("usuarios","[]")
        usuarios = []        
    }
    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
function logar(){
    var username = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var usuarios = JSON.parse(localStorage.getItem("usuarios"))
    if(usuarios == null){
        alert("Nenhum Usuário Cadastrado!")        
    }
    else{
        var msg = "Usuário não encontrado"
        var logado = Boolean(false)
        for(user of usuarios){
            if(user.nome === username && user.senha === senha){
                msg = "Bem vindo!"
                logado = true
                break
            }
        }
        if(logado){
            telaPerfil()
        }
        alert (msg)
    } 
}