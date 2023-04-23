// products details thru API

const productImage = document.getElementById("product-image");
const productTitle = document.getElementById("product-title");
const productCategory = document.getElementById("product-category");
const productDescription = document.getElementById("product-description");
const productRating = document.getElementById("product-rating");
const productPrice = document.getElementById("product-price");
const productId = new URL(window.location.href).searchParams.get("productId");

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then((res) => res.json())
  .then((json) => {
    document.getElementById('loading').style.display = 'none';
    productImage.src = json.image;
    productTitle.innerHTML = json.title;
    productCategory.innerHTML = "Product category: " + json.category;
    productDescription.innerHTML = "Description: " + json.description;
    productPrice.innerHTML = "$" + json.price;
    productRating.innerHTML = " ⭐ Rating: " + json.rating.rate + "  ⭐";
  });
