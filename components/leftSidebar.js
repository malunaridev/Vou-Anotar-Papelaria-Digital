import { todososprodutos } from "../database/todos-os-produtos.js";
const leftSidebar = document.getElementById("leftSidebarComponent");

const leftMenuContent = `<div class="digitalMaterialSection">
          <div class="digitalMaterialDeco">
            <div class="digitalMaterialDeco2"></div>
          </div>

          <div class="leftSidebarTitle1">
            <span class="leftSidebarTitle1Text">Materiais Digitais</span>
          </div>

          <nav class="digitalMaterialSummary">
            <ul class="digitalResourcesList">
              <li class="digitalMaterialType type1">
                <a href="https://vouanotar.com/produtos/cadernos-digitais" rel="alternate">Cadernos Digitais </a><div class="newIcon">
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Refis Avulsos</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Flashcards</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Planners</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Listinhas de Afazeres</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Trackers</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Calendários</a>
              </li>
              <li class="digitalMaterialType type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="leftSidebarDeco"></div>

        <div class="digitalAcessoriesSection">
          <div class="digitalMaterialDeco">
            <div class="digitalMaterialDeco3"></div>
          </div>

          <div class="leftSidebarTitle1">
            <span class="leftSidebarTitle1Text">Acessórios</span>
          </div>

          <nav class="digitalMaterialSummary">
            <ul class="digitalResourcesList">
              <li class="digitalMaterialType type1">
                <a href="" rel="">Adesivos</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Alfabetos Digitais</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Clipes e Pins</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Divisórias</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Notas Adesivas</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Paletas Hex</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Washi Tapes</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Polaroids</a>
              </li>
              <li class="digitalMaterialType type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="leftSidebarDeco"></div>

        <div class="printSection">
          <div class="digitalMaterialDeco">
            <div class="digitalMaterialDeco4"></div>
          </div>

          <div class="leftSidebarTitle1">
            <span class="leftSidebarTitle1Text">Para Imprimir</span>
          </div>

          <nav class="digitalMaterialSummary">
            <ul class="digitalResourcesList">
              <li class="digitalMaterialType type1">
                <a href="" rel="">Marcadores de Página</a>
              </li>
              <li class="digitalMaterialType type2">
                <a href="" rel="">Etiquetas para Presente</a>
              </li>
              <li class="digitalMaterialType type1">
                <a href="" rel="">Papéis de Carta</a>
              </li>
              <li class="digitalMaterialType type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="leftSidebarDeco"></div>

        <div class="randomChoicesSection">
          <div class="leftSidebarTitle1">
            <span class="leftSidebarTitle1Text">Aleatórios</span>
          </div>

          <nav id="randomChoices">
            
          </nav>
        </div>

        <div class="leftSidebarDeco"></div>

        <div class="adWindow ad1"></div>
        `
        
        
        
        
        ;

leftSidebar.innerHTML = leftMenuContent;

const randomChoices = document.getElementById("randomChoices");

var arrayOriginal = todososprodutos;
function obterObjetosAleatorios(arr, quantidade) {
  const copiaArray = [...arr];
  const objetosAleatorios = [];
  for (let i = 0; i < quantidade; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
    objetosAleatorios.push(copiaArray.splice(indiceAleatorio, 1)[0]);
  }
  return objetosAleatorios;
}

const novosObjetos = obterObjetosAleatorios(arrayOriginal, 7);
novosObjetos.forEach((item) => {
  const productCard = document.createElement("a");
  const starBackground = document.createElement("div");
  const productCollection = document.createElement("a");
  const productThumb = document.createElement("img");
  const productTitle = document.createElement("div");
  const productPrice = document.createElement("div");

  productCard.classList.add("productCard");
  starBackground.classList.add("starBackground");
  productCard.style.background = item.cardGradient;

  if (item.collection !== null) {
    productCollection.classList.add("collectionItem");
    productCollection.style.background = item.collectionTagColor;
    productCard.appendChild(productCollection);
  }

  productThumb.classList.add("productPicture");
  productThumb.classList.add("containerImage");
  productTitle.classList.add("productTitle");
  productPrice.classList.add("itemPrice");

  randomChoices.appendChild(productCard);
  productCard.appendChild(starBackground);
  productCard.appendChild(productThumb);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);

  productCollection.href = item.collectionLink;
  productCollection.rel = "alternate";
  productCard.href = item.itemLink;
  productCard.rel = "alternate";
  productCollection.textContent = item.collection;
  productThumb.src = item.picture1;
  productTitle.textContent = item.title;
  productPrice.textContent = item.price;
});
