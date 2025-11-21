let cardContainer = document.querySelector(".card-container");
let dados = [];

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", (event) => {
  // Verifica se a tecla pressionada foi "Enter"
  if (event.key === "Enter") {
    iniciarBusca();
  }
});

window.addEventListener("DOMContentLoaded", carregarFilmes);

async function carregarFilmes() {
  const resposta = await fetch("data.json");
  dados = await resposta.json();
  renderizarCards(dados);
}

function normalizarTexto(texto) {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

async function iniciarBusca() {
  const valorPesquisa = normalizarTexto(
    document.getElementById("search-input").value
  );

  const filmesFiltrados = dados.filter((filme) => {
    return (
      normalizarTexto(filme.titulo).includes(valorPesquisa) ||
      normalizarTexto(filme.descricao).includes(valorPesquisa)
    );
  });

  renderizarCards(filmesFiltrados);
}

function renderizarCards(dados) {
  cardContainer.innerHTML = "";
  for (let dadosItem of dados) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
    <h2>${dadosItem.titulo}</h2>
    <img src="${dadosItem.imagem}" alt="Pôster do filme ${dadosItem.titulo}">
    <p>${dadosItem.descricao}</p>
    <a
      href="${dadosItem.link}"
      target="_blank"
      >Mais informações</a>`;

    cardContainer.appendChild(article);
  }
}
