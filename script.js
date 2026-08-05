
function mensagem() {

    let nome = document.querySelector("input").value;
    alert(`Olá, ${nome}!`);
}

function trocarTexto() {

    document.getElementById("titulo").innerHTML = "Cor de fundo alterada!";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function trocarLista(){
    document.querySelector("ol").innerHTML = `
        <li>Vegano</li>
        <li>Algas</li>
        <li>Capim</li>
    `;
}


function cadastro() {
    alert("Cadastro iniciado! Preencha os campos a seguir.");
    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
    let corFavorita = prompt("Digite sua cor favorita em INGLÊS:");

    document.getElementById("nome").innerHTML = `Nome: ${nome}`;
    document.getElementById("idade").innerHTML = `Idade: ${idade}`;
    document.getElementById("corFavorita").innerHTML = `Cor favorita: ${corFavorita}`;

    document.body.style.backgroundColor = corFavorita;

    
}