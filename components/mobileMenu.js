import { todososprodutos } from "../database/todos-os-produtos.js";
const rightSidebarMobile = document.getElementById("mobileRightMenuContent");
const leftSidebarMobile = document.getElementById("mobileLeftMenuContent");

rightSidebarMobile.innerHTML = `
<div class="featuresBoard">
          <div class="featuresList">
            <div class="features">
              <div class="featureButton featureButton1">L</div>
              <div class="featureText">
                <div class="featureTitle featureTitle1">Produtos digitais</div>
                <div class="featuresDescription">de alta qualidade</div>
              </div>
            </div>
            <div class="features">
              <div class="featureButton featureButton2"></div>
              <div class="featureText">
                <div class="featureTitle featureTitle2">compras confiáveis</div>
                <div class="featuresDescription">humanizadas e seguras</div>
              </div>
            </div>
            <div class="features">
              <div class="featureButton featureButton3"></div>
              <div class="featureText">
                <div class="featureTitle featureTitle3">está com dúvidas?</div>
                <div class="featuresDescription">fale conosco aqui</div>
              </div>
            </div>
            <div class="features">
              <div class="featureButton featureButton4"></div>
              <div class="featureText">
                <div class="featureTitle featureTitle4">Quer algo especial?</div>
                <div class="featuresDescription">faça seu pedido</div>
              </div>
            </div>
          </div>
        </div>

        <div class="digitalMaterialSection">
          <div class="rightSidebarTitle1">
            <span class="rightSidebarTitle1Text">Escolha por tema</span>
          </div>

          <nav class="digitalMaterialSummary centered">
            <ul class="themesList">
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Aquarela</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Alimentos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Animais</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Arte</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Astros</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Datas Especiais</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Delicados</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Divertidos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Fofos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Frutas</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Fundo do Mar</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Góticos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Grupos e Bandas</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Hobbies</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Ilustrações</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Jogos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  K-Pop</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Masculinos</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Minimalistas</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Natureza</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Personagens</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Profissões</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Simples</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  Vintage</a
                >
              </li>
              <li class="themeOption">
                <a href="" rel=""
                  ><div class="bullet"></div>
                  y2k</a
                >
              </li>
            </ul>

            <div class="seeAllThemes">
              <div class="seeAllThemesStar">T</div>
              <div class="seeAllThemesText">Ver todos</div>
              <div class="seeAllThemesStar">T</div>
            </div>
          </nav>
        </div>

        <div class="rightSidebarDeco"></div>

        <div class="digitalMaterialSection">
          <div class="rightSidebarTitle1">
            <span class="rightSidebarTitle1Text">Escolha por preço</span>
          </div>

          <nav class="digitalMaterialSummary">
            <ul class="pricesMenu">
              <li class="priceCap">
                <a href="" rel="">
                  <div class="priceCapIcon1"></div>
                  <span class="priceRange">até <span>R$ 10</span></span>
                </a>
              </li>
              <li class="priceCap">
                <a href="" rel="">
                  <div class="priceCapIcon2"></div>
                  <span class="priceRange"
                    >de <span>R$ 11</span> — <span>R$ 15</span></span
                  ></a
                >
              </li>
              <li class="priceCap">
                <a href="" rel="">
                  <div class="priceCapIcon3"></div>
                  <span class="priceRange"
                    >de <span>R$ 16</span> — <span>R$ 23</span></span
                  ></a
                >
              </li>
              <li class="priceCap">
                <a href="" rel="">
                  <div class="priceCapIcon4"></div>
                  <span class="priceRange">Acima de <span>R$ 24</span></span></a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="rightSidebarDeco"></div>

        <div class="digitalMaterialSection">
          <div class="rightSidebarTitle1">
            <span class="rightSidebarTitle1Text">Escolha por cor</span>
          </div>

          <nav class="digitalMaterialSummary">
            <div class="allColors">
              <div class="selectColor colorRed"></div>
              <div class="selectColor colorOrange"></div>
              <div class="selectColor colorYellow"></div>
              <div class="selectColor colorGreen"></div>
              <div class="selectColor colorMint"></div>
              <div class="selectColor colorSoftBlue"></div>
              <div class="selectColor colorDarkBlue"></div>
              <div class="selectColor colorPurple"></div>
              <div class="selectColor colorMagenta"></div>
              <div class="selectColor colorPink"></div>
              <div class="selectColor colorGray"></div>
              <div class="selectColor colorBlack"></div>
              <div class="selectColor colorWhite"></div>
            </div>
          </nav>
        </div>

        <div class="rightSidebarDeco"></div>

        <div class="adWindow ad2"></div>

        <div class="mostLovedSection">
          <div class="rightSidebarTitle1">
            <span class="rightSidebarTitle1Text">Favoritos</span>
          </div>

          <nav id="mostLovedMobile">
        
          </nav>
        </div>

        <div class="divider1"></div>

        <div class="adWindow ad2"></div>
`;

const mostLovedMobile = document.getElementById("mostLovedMobile");
todososprodutos.forEach((item) => {
  if (item.display.includes("lovedProducts")) {
    const productCard = document.createElement("a");
    const starBackground = document.createElement("div");
    const productCollection = document.createElement("a");
    const productThumb = document.createElement("img");
    const productTitle = document.createElement("div");
    const productPrice = document.createElement("div");

    productCard.classList.add("productCard");
    starBackground.classList.add("starBackground");
    productCard.style.background = item.cardGradient;
    productCollection.classList.add("collectionItem");
    productCollection.style.background = item.collectionTagColor;
    productThumb.classList.add("productPicture");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");

    mostLovedMobile.appendChild(productCard);
    productCard.appendChild(starBackground);
    productCard.appendChild(productCollection);
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
  }
});

leftSidebarMobile.innerHTML = `
<div class="digitalMaterialSection">
          <div class="digitalMaterialDeco">
            <div class="digitalMaterialDeco2"></div>
          </div>

          <div class="leftSidebarTitle1">
            <span class="leftSidebarTitle1Text">Materiais Digitais</span>
          </div>

          <nav class="digitalMaterialSummary">
            <ul class="digitalResourcesList">
              <li class="digitalMaterialType  type1">
                <a href="https://vouanotar.com/produtos/cadernos-digitais" rel="alternate">Cadernos Digitais <div class="newIcon"></a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Refis Avulsos</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Flashcards</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Planners</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Listinhas de Afazeres</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Trackers</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Calendários</a>
              </li>
              <li class="digitalMaterialType  type3">
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
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Adesivos</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Alfabetos Digitais</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Clipes e Pins</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Divisórias</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Notas Adesivas</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Paletas Hex</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Washi Tapes</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Polaroids</a>
              </li>
              <li class="digitalMaterialType  type3">
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
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Marcadores de Página</a>
              </li>
              <li class="digitalMaterialType  type2">
                <a href="" rel="">Etiquetas para Presente</a>
              </li>
              <li class="digitalMaterialType  type1">
                <a href="" rel="">Papéis de Carta</a>
              </li>
              <li class="digitalMaterialType  type3">
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

          <nav id="randomChoicesMobile">
            
          </nav>
        </div>

        <div class="leftSidebarDeco"></div>

        <div class="adWindow ad1"></div>`;

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
const novosObjetos = obterObjetosAleatorios(arrayOriginal, 10);
const randomChoicesMobile = document.getElementById("randomChoicesMobile");
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
  productCollection.classList.add("collectionItem");
  productCollection.style.background = item.collectionTagColor;
  productThumb.classList.add("productPicture");
  productTitle.classList.add("productTitle");
  productPrice.classList.add("itemPrice");

  randomChoicesMobile.appendChild(productCard);
  productCard.appendChild(starBackground);
  productCard.appendChild(productCollection);
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
