
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


    let botao = document.getElementById("meuBotao");
    if (botao) {
        botao.addEventListener("mouseenter", function() {
            botao.style.backgroundColor = "purple";
            botao.style.color = "white";
        });

        botao.addEventListener("mouseleave", function() {
            botao.style.backgroundColor = "";
            botao.style.color = "";
        });
    }

    const imagens = [
        "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/gettyimages-2202479142resized.webp?w=1600&h=1067",
        "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/vulcao-em-erupcao-e1735068190591.jpg?w=1200&h=900&crop=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kUW4GvzzsprrB88JEdyuIhwrVUz2Fnpyg5rTQ6Mkjs4oK4_8pYo7vAc&s=10",
        ]

    const imgElemento = document.getElementById("imagem-carrossel");
    let indiceAtual = 0;

    function mudarFoto(){
        indiceAtual = indiceAtual + 1;
        
        if(indiceAtual >= imagens.length){
            indiceAtual = 0;
        }

        imgElemento.src = imagens[indiceAtual];
    }

    setInterval(mudarFoto, 3000);
