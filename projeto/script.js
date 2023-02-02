









function registro() {

    var nome = document.getElementById("nome").value
    var sobreNome = document.getElementById("sobrenome").value
    var email = document.getElementById("email").value
    var confEmail = document.getElementById("confEmail").value
    var telefone = document.getElementById("tel").value
    var cpf = document.getElementById("cpf").value
    var dat = document.getElementById("dtNasc").value
    var senha = document.getElementById("senha").value
    var confsenha = document.getElementById("confSenha").value
    var adm=Number(document.getElementById("adm").value)
    var tipo
    if(adm==32420323){
        tipo="admin"
    }else{
        tipo="estudante"
    }
    var sexo = ""
    if (document.getElementById("fem").checked) {
        sexo = "Feminino"
    } else if (document.getElementById("masc").checked) {
        sexo = "Masculino"
    } else { sexo = "Não informado" }

    if (confEmail != email) {
        alert("Os E-mails não coincidem!")
        return;
    } else if (cpf.length != 11) {
        alert("O CPF está incorreto")
        return;
    } else if (senha.length < 8) {
        alert('Senha fraca')
        return;
    } else if (senha != confsenha) {
        alert("As senhas não coincidem!")
        return;
    }
    var datarrumar = dat.split("-")
    var datNasc = datarrumar[2]
    for (i = 1; i >= 0; i--) {
        datNasc += "/" + datarrumar[i]
    }
    var pessoa = {nome, sobreNome, email, telefone, cpf, datNasc, senha, sexo, tipo }
    inserir(pessoa)

}

function inserir(pessoa) {
    var bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
        localStorage.setItem("bancoDeDados", "[]")
        bancoDeDados = []
    }
    bancoDeDados.push(pessoa)
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
    document.location.href = 'T1-login.html'
}

function login() {
    var emailV = document.getElementById("email").value
    var senhaV = document.getElementById("senha").value
    var encontrou = Boolean(false)
    var localarray=-1
    var tipoentrada
    var bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
        alert("Nenhum usuário cadastrado até o momento")
    } else {
        for (pessoa of bancoDeDados) {
            localarray++
            if (pessoa.email === emailV && pessoa.senha === senhaV) {
                encontrou = true
                tipoentrada = pessoa.tipo
                break
            }
        } if (encontrou == true) {
            EnviarUser(localarray, tipoentrada)
        } else { "Usuário ou senha inválido" }
    }
}

function EnviarUser(posicao, tipo){
    localStorage.setItem("local",posicao)
    if(tipo=="admin"){
        document.location.href='T5-TelaAdm.html'
    }else{
        document.location.href = 'T4-telauser.html'
    }
}

function limpa() {
    document.getElementById("nome").value = null
    document.getElementById("sobrenome").value = null
    document.getElementById("email").value = null
    document.getElementById("confEmail").value = null
    document.getElementById("tel").value = null
    document.getElementById("cpf").value = null
    document.getElementById("dtNasc").value = null
    document.getElementById("senha").value = null
    document.getElementById("confSenha").value = null
    document.getElementById("fem").checked = false
    document.getElementById("masc").checked = false
    document.getElementById("nInf").checked = false
    document.getElementById("adm").value = false
}

function RodarUser(){
var posicaoUser=Number(JSON.parse(localStorage.getItem("local")))
var bancoDeDados= JSON.parse(localStorage.getItem("bancoDeDados"))
var pessoa=bancoDeDados[posicaoUser]

document.getElementById("nomet").innerHTML=pessoa.nome
document.getElementById("sobrenomet").innerHTML=pessoa.sobreNome
document.getElementById("emailt").innerHTML=pessoa.email
document.getElementById("telefonet").innerHTML=pessoa.telefone
document.getElementById("cpft").innerHTML=pessoa.cpf
document.getElementById("datat").innerHTML=pessoa.datNasc
document.getElementById("sexot").innerHTML=pessoa.sexo
document.getElementById("senhat").innerHTML=pessoa.senha

}


function excluir(){
var cpfV=document.getElementById("cpfre").value
var senhaV=document.getElementById("senhare").value
var bancoDeDados= JSON.parse(localStorage.getItem("bancoDeDados"))
var posicao=0
var encontrado=Boolean(false)
for(pessoa of bancoDeDados){
    if(cpfV===pessoa.cpf && senhaV===pessoa.senha){
        bancoDeDados.splice(posicao, 1)
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
        encontrado=true
        break
    }
    posicao++
}if(encontrado==true){
    alert("Usuário excluido com sucesso")
    document.location.href = 'T1-login.html'
}else{
    alert("CPF ou Senha incorretos")
}


}

function TelaADM(){
var bancoDeDados= JSON.parse(localStorage.getItem("bancoDeDados"))
var mostrar=""

for(pessoa of bancoDeDados){
    if(pessoa.tipo!="admin"){
    mostrar+="<tr><td>" + pessoa.nome + "</td><td>" + pessoa.sobreNome + "</td><td>" + 
    pessoa.email+"</td><td>"+pessoa.telefone+"</td><td>"+pessoa.cpf+ "</td><td>" + 
    pessoa.datNasc+ "</td><td>" +pessoa.sexo+ "</td><td>" +pessoa.senha+"</td><br>"
}
}document.getElementById("mostrar").innerHTML+=mostrar
document.getElementById("mostrar").innerHTML+="</tr>"
}



