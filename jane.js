const imagens = [
       "https://likemagazine.com.br/midias/2025/09/Cabelo-curto-cacheado-@lrssleite-like-magazine-819x1024.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL75s2658w_61w6c4qNCNv8lQNnFx00RXmbBcTr79WJech8tlteEPivof&s=10",
       "https://i.pinimg.com/originals/be/cc/9e/becc9e089d474f239f214de1f231e29a.jpg",
       "https://mulheralemdamae.com.br/wp-content/uploads/2024/01/penteado-cabelo-cacheado-curto-casual-trabalho.jpg",
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