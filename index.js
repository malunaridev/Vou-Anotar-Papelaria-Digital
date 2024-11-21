import { todososprodutos } from "./database/todos-os-produtos.js";

const gridContainer = document.getElementById("newsGridTeste");

// const productGreen = colecao.filter((item) => item.color === "green");
// console.log('productGreen', productGreen.length)

todososprodutos.forEach((item) => {
  if ((item.display = "homeNews")) {
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

    gridContainer.appendChild(productCard);
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


