import { todososprodutos } from "../../database/todos-os-produtos.js";
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

      const otherProductsGrid = document.getElementById("otherProducts");
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

        otherProductsGrid.appendChild(productCard);
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