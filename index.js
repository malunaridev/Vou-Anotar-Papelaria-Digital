import { todososprodutos } from "./database/todos-os-produtos.js";

const homepageRecentProductsGrid = document.getElementById(
  "homepageRecentProductsGrid"
);

todososprodutos.forEach((item) => {
  if (item.display.includes("homeNews")) {
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
    }

    productThumb.classList.add("productPicture");
    productThumb.classList.add("containerImage");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");

    homepageRecentProductsGrid.appendChild(productCard);
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

const homepagePlannersGrid = document.getElementById("homepagePlannersGrid");

todososprodutos.forEach((item) => {
  if (item.type.includes("planner")) {
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
    }

    productThumb.classList.add("productPicture");
    productThumb.classList.add("containerImage");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");

    homepagePlannersGrid.appendChild(productCard);
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

const pinkWorldGrid = document.getElementById("pinkWorldGrid");

todososprodutos.forEach((item) => {
  if (item.CategoryColor.includes("blue")) {
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
    }

    productThumb.classList.add("productPicture");
    productThumb.classList.add("containerImage");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");

    pinkWorldGrid.appendChild(productCard);
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


const homepageCombosGrid = document.getElementById("homepageCombosGrid");
todososprodutos.forEach((item) => {
  if (item.type.includes("planner")) {
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
    }

    productThumb.classList.add("productPicture");
    productThumb.classList.add("containerImage");
    productTitle.classList.add("productTitle");
    productPrice.classList.add("itemPrice");

    homepageCombosGrid.appendChild(productCard);
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