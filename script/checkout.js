import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  updateCartQuantity,
} from "../script/cart.js";
import { paymentSummary } from "../script/paymentSummary.js";

function renderCartSummary() {
  let cartSummaryHTML = "";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((listItem) => {
    cartSummaryHTML += `
      <div class="cart-page js-cart-container-${listItem.id}">
        <div class="cart-list">
          <div>
            <img src="${listItem.image}">
          </div>
          <div>
            <p class="item-title">${listItem.name}</p>
            <p class="item-summary">Seller: Bakers Bakings | Variation: one pieces in Stock</p>
            <p class="item-title">Quantity: <span class="js-quantity">${listItem.quantity}</span></p>
          </div>
          <div class="price">
            <p>&#8358 ${listItem.price}</p>
          </div>
        </div>
        <div class="cart-add">
          <div class="del-item js-del-link" data-product-id='${listItem.id}'>
            REMOVE
          </div>
          <div class="btns">
            <button class='js-minus' data-product-id='${listItem.id}'>-</button>
            <span> ${listItem.quantity} </span>
            <button class='js-add' data-product-id='${listItem.id}'>+ </button>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  // Add event listeners for remove buttons
  document.querySelectorAll(".js-del-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      paymentSummary();
      updateCartQuantity();
      renderCartSummary();
    });
  });

  // Add event listeners for + and - buttons
  document.querySelectorAll(".js-add").forEach((button) => {
    button.addEventListener("click", (event) => {
      incrementQuantity(event);
      renderCartSummary();
      paymentSummary();
    });
  });

  document.querySelectorAll(".js-minus").forEach((button) => {
    button.addEventListener("click", (event) => {
      decrementQuantity(event);
      renderCartSummary();
      paymentSummary();
    });
  });
}

// Initial render
renderCartSummary();
paymentSummary();
updateCartQuantity();
