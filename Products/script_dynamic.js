// go to top function

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// view options for products

const rangeInput = document.querySelector('input[type = "range"]');
const imageList = document.querySelector(".image-list");
const searchInput = document.querySelector('input[type="search"]');
const btns = document.querySelectorAll(".view-options button");
const photosCounter = document.querySelector(".toolbar .counter span");
let imageListItems = document.querySelectorAll(".items-container li");
let counter = 1;
const active = "active";
const listView = "list-view";
const gridView = "grid-view";
const dNone = "d-none";

for (const btn of btns) {
  btn.addEventListener("click", function () {
    const parent = this.parentElement;
    document.querySelector(".view-options .active").classList.remove(active);
    parent.classList.add(active);
    this.disabled = true;
    document.querySelector(
      '.view-options [class^="show-"]:not(.active) button'
    ).disabled = false;
    if (parent.classList.contains("show-list")) {
      parent.previousElementSibling.previousElementSibling.classList.add(dNone);
      imageList.classList.remove(gridView);
      imageList.classList.add(listView);
    } else {
      parent.previousElementSibling.classList.remove(dNone);
      imageList.classList.remove(listView);
      imageList.classList.add(gridView);
    }
  });
}

rangeInput.addEventListener("input", function () {
  document.documentElement.style.setProperty(
    "--minRangeValue",
    `${this.value}px`
  );
});

// search feature

const myArray = [];
const captions = document.querySelectorAll(".fig-title");

for (let i = 0; i < 20; i++) {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => {
      myArray.push({
        id: counter++,
        text: json[i].title,
      });
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "search-error"
      ).innerHTML = `We've encountered an error: ${error}`;
    });
}

function showCategory () {
  for (const item of imageListItems) {
    item.classList.add(dNone);
    let attributeValue = item.getAttribute("data-category");

    if (attributeValue == this.id) {
      item.classList.remove(dNone);
    }
  }
}

const showAll = () => {
  for (const item of imageListItems) {
      item.classList.remove(dNone);
    }
  }

document.getElementById("electronics").addEventListener("click", showCategory);
document.getElementById("jewelery").addEventListener("click", showCategory);
document.getElementById("women's clothing").addEventListener("click", showCategory);
document.getElementById("men's clothing").addEventListener("click", showCategory);
document.getElementById("showAll").addEventListener("click", showAll);

function keyupHandler() {
  for (const item of imageListItems) {
    item.classList.add(dNone);
  }
  const text = this.value;
  const filteredArray = myArray.filter((el) =>
    el.text.toLowerCase().includes(text.toLowerCase())
  );

  if (filteredArray.length > 0) {
    for (const el of filteredArray) {
      document
        .querySelector(`.items-container li:nth-child(${el.id})`)
        .classList.remove(dNone);
    }
  }

  if (filteredArray.length == 1) {
    photosCounter.textContent = filteredArray.length + " product found ✔️";
  } else if (filteredArray.length > 2) {
    photosCounter.textContent = filteredArray.length + " products found ✔️";
  } else if (filteredArray.length == 0) {
    photosCounter.textContent = filteredArray.length + " products found ❌";
  } else {
    document.getElementById(
      "search-error"
    ).innerHTML = `We've encountered an error`;
  }
}

searchInput.addEventListener("keyup", keyupHandler);

// open cart modal
const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

cart.addEventListener("click", () => {
  if (cartModalOverlay.style.transform === "translateX(-200%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});

// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");

function addToCartClicked(event) {
  button = event.target;
  button.innerHTML = "Added ✔️";
  button.style.outline = "none";

  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName("product-price")[0].innerText;

  var imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
  let itemTitle = cartItem.getElementsByClassName("fig-title")[0].innerText;
  addItemToCart(price, imageSrc, itemTitle);
  updateCartPrice();
}

// add to favorites feature

const favorites = document.querySelectorAll(".favorites");

function addToFavorites(event) {
  button = event.target;
  button.style.outline = "none";
  button.style.backgroundColor = "red";
  button.style.color = "var(--lightPeach)";

  var cartItem = button.parentElement;
  var ol = document.getElementById("favoritesList");
  let itemTitle = cartItem.getElementsByClassName("fig-title")[0].innerText;
  let li = document.createElement("li");

  li.textContent = itemTitle;
  ol.appendChild(li);

  let imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
  let imageToAdd = document.createElement("img");

  imageToAdd.src = imageSrc;
  imageToAdd.style.width = "6%";
  imageToAdd.style.marginLeft = "20px";
  li.appendChild(imageToAdd);

  let removeButton = document.createElement("button");
  removeButton.innerHTML = " ❌ ";
  removeButton.style.marginLeft = "50px";
  li.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeButton.parentElement.remove();
  });
}

function addItemToCart(price, imageSrc, itemTitle) {
  var productRow = document.createElement("div");
  productRow.classList.add("product-row");
  var productRows = document.getElementsByClassName("product-rows")[0];
  var cartImage = document.getElementsByClassName("cart-image");

  for (let i = 0; i < cartImage.length; i++) {
    if (cartImage[i].src == imageSrc) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <h4> ${itemTitle} </h4>
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">REMOVE</button> 
        </div>
      `;

  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeItem);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("change", changeQuantity);
  updateCartPrice();
}

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (let i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}

// update quantity input
var quantityInput = document.getElementsByClassName("product-quantity")[0];

for (let i = 0; i < quantityInput; i++) {
  input = quantityInput[i];
  input.addEventListener("change", changeQuantity);
}

function changeQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartPrice();
}

// update total price
function updateCartPrice() {
  let total = 0;
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("€", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText =
    "$" + total.toFixed(2);
  document.getElementsByClassName("cart-quantity")[0].textContent = i /= 2;
}

// purchase items
const purchaseBtn = document.querySelector(".purchase-btn");
const closeCartModal = document.querySelector(".cart-modal");

purchaseBtn.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
  alert("Thank you for your purchase!");
  cartModalOverlay.style.transform = "translateX(-100%)";
  var cartItems = document.getElementsByClassName("product-rows")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartPrice();
}

// products details thru fakestoreAPI


const showItems = url =>  {
  if ("content" in document.createElement("template")) {
    const productsContainer = document.querySelector("ol.items-container");
    const template = document.querySelector("#productcard");
   
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          // Clone the new row and insert it into the table
          document.getElementById('loading').style.display = 'none';
          const clone = template.content.cloneNode(true);
          const product = json[i];
          let image = clone.querySelector("#image0");
          image.src = product.image;
          image.id = `image${i}`;
  
          let title = clone.querySelector("#title0");
          title.innerHTML = product.title;
          title.id = `title${i}`;
  
          let productPrice = clone.querySelector("#product-price-0");
          productPrice.innerHTML = product.price;
          productPrice.id = `product-price-${i}`;
  
          let productDetailsAnchor = clone.querySelector(".product-details-anchor");
          productDetailsAnchor.href = productDetailsAnchor.href.replace("#", product.id);
  
          let buttonCart = clone.querySelector(".addToCart");
          buttonCart.addEventListener("click", addToCartClicked);
  
          let buttonFavorites = clone.querySelector(".favorites");
          buttonFavorites.addEventListener("click", addToFavorites);
          buttonFavorites.addEventListener("click", () => {
            buttonFavorites.innerHTML = '<i class="bi bi-heart-fill"></i>';
          });
          let figure = clone.querySelector("li");
          figure.dataset.category = product.category;
  
          //product-details-anchor
          productsContainer.appendChild(clone);
        }
        imageListItems = document.querySelectorAll(".image-list li");
      })
      .catch((error) => {
        document.getElementById(
          "catch-error"
        ).innerHTML = `We're sorry, this error occured: ${error}. Please try again!`;
      });
  }
}

showItems('https://fakestoreapi.com/products');

const showItemsAsc = () => {
  for (const item of imageListItems) {
                item.classList.add(dNone);
              }
  showItems('https://fakestoreapi.com/products?sort=asc')
}

const showItemsDesc = () => {
  for (const item of imageListItems) {
                item.classList.add(dNone);
              }
  showItems('https://fakestoreapi.com/products?sort=desc')
}

document.getElementById('sortedAsc').addEventListener("click", showItemsAsc);
document.getElementById('sortedDesc').addEventListener("click", showItemsDesc);
