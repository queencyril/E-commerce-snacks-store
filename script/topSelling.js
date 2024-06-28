import { cart, addToCart } from "../script/cart.js";
import { products } from "../script/listItems.js";
import { items } from "../script/products.js";
import { features } from "../script/featured.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="items">
          <div class="display-items">
            <a href="itemInfo.html"><img src="${product.image}" alt="" class="display-img"></a>
          </div>
  
          <div class="item-info">
            <p class="item-name">${product.name}</p>
          <p class="item-price">&#8358 ${product.price} </p>

          <button class="js-add-btn add-btn" data-product-id='${product.id}' >ADD TO CART</button>
        </div>       
        </div>
  `;
});

// console.log(productsHTML)

document.querySelector(".js-items").innerHTML = productsHTML;

document.querySelectorAll(".js-add-btn").forEach((button) => {
  button.addEventListener("click", addToCart);
});

const uniqueItemsCount = new Set(cart.map((item) => item.id)).size;

// Update the cart quantity display in the DOM
document.querySelector(".js-home-cart-total").textContent =
  uniqueItemsCount.toString();
