import { colecao } from "./produtos/cadernos-digitais.js";

const gridContainer = document.getElementById("newsGridTeste");

// const productGreen = colecao.filter((item) => item.color === "green");
// console.log('productGreen', productGreen.length)

colecao.forEach((item) => {
  if (item.display = 'homeNews') {

    const productCard = document.createElement("a");
    const productCollection = document.createElement("div");
    const productThumb = document.createElement("img");
    const productTitle = document.createElement("div");
    const productPrice = document.createElement("div");

    productCard.classList.add("productCard");
    productCollection.classList.add("collectionItem");
    productCollection.style.background = item.collectionColor;
    productThumb.classList.add("productPicture");
    productThumb.classList.add("containerImage");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");
    gridContainer.appendChild(productCard);
    productCard.href = "https://www.google.com.br";
    productCard.rel = "alternate";


    productCard.appendChild(productCollection);
    productCard.appendChild(productThumb);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);

    productThumb.src = item.thumbnail;
    productTitle.textContent = item.title;
    productPrice.textContent = item.price;
  }
});
