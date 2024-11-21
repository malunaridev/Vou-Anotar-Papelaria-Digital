import { todososprodutos } from "../database/todos-os-produtos.js";
const leftSidebar = document.getElementById("leftSidebarComponent");


leftSidebar.innerHTML = `<div class="digitalResources">
          <div class="digitalResourcesPet">
            <div class="pet1"></div>
          </div>

          <div class="leftSidebarButton">
            <span class="leftSidebarText">Materiais Digitais</span>
          </div>

          <nav class="digitalResourcesMenu">
            <ul class="digitalResourcesCategories">
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Cadernos Digitais</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Refis Avulsos</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Flashcards</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Planners</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Listinhas de Afazeres</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Trackers</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Blocos de Anotações</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Calendários</a>
              </li>
              <li class="digitalResourcesTypes type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="divider1"></div>

        <div class="digitalResources">
          <div class="digitalResourcesPet">
            <div class="pet2"></div>
          </div>

          <div class="leftSidebarButton">
            <span class="leftSidebarText">Acessórios</span>
          </div>

          <nav class="digitalResourcesMenu">
            <ul class="digitalResourcesCategories">
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Adesivos</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Alfabetos Digitais</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Clipes e Pins</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Divisórias</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Notas Adesivas</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Paletas Hex</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Washi Tapes</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Polaroids</a>
              </li>
              <li class="digitalResourcesTypes type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="divider1"></div>

        <div class="digitalResources">
          <div class="digitalResourcesPet">
            <div class="pet3"></div>
          </div>

          <div class="leftSidebarButton">
            <span class="leftSidebarText">Para Imprimir</span>
          </div>

          <nav class="digitalResourcesMenu">
            <ul class="digitalResourcesCategories">
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Marcadores de Página</a>
              </li>
              <li class="digitalResourcesTypes type2">
                <a href="" rel="">Etiquetas para Presente</a>
              </li>
              <li class="digitalResourcesTypes type1">
                <a href="" rel="">Papéis de Carta</a>
              </li>
              <li class="digitalResourcesTypes type3">
                <a href="" rel="">Downloads Gratuitos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="divider1"></div>

        <div class="digitalResources">
          <div class="leftSidebarButton">
            <span class="leftSidebarText">kit da semana</span>
          </div>

          <nav class="digitalResourcesMenu lovedProducts" id="weeklyChoices">
            
          </nav>
        </div>

        <div class="divider1"></div>

        <div class="adWindow ad1"></div>`;

   
 const weeklyItems = document.getElementById("weeklyChoices")       
        todososprodutos.forEach((item) => {
          if ((item.display == "weeklyChoice")) {
            const productCard = document.createElement("a");
            const productCollection = document.createElement("a");
            const productThumb = document.createElement("img");
            const productTitle = document.createElement("div");
            const productPrice = document.createElement("div");
        
            productCard.classList.add("productCard");
            productCard.style.background = item.cardGradient;
            productCollection.classList.add("collectionItem");
            productCollection.style.background = item.collectionTagColor;
            productThumb.classList.add("productPicture");
            productThumb.classList.add("containerImage");
            productTitle.classList.add("productTitle");
            productPrice.classList.add("itemPrice");
        
            weeklyItems.appendChild(productCard);
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
