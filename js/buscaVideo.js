import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    };

    busca.forEach(element => {
        lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem));
    });

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esses termos</h2>`
    };

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento));
