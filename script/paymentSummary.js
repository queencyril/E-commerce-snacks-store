import { cart } from "../script/cart.js";
import { getProduct } from "../script/listItems.js";

export function paymentSummary(){
  let productPrice = 0;

  cart.forEach((listItems) => {
    const product = getProduct(listItems.id);
    productPrice += product.price * listItems.quantity;
  });


  const paymentSummaryHTML = `
    <div class="cart-summary-title">
              CART SUMMARY
            </div>
            <div>
              <div class="subtotal">
                <div>
                  <p class="subtotal-title">Subtotal</p>
                  <p class="subtotal-para">Delivery fee not included yet.</p></div>
                
                <div class="price2">
                  &#8358 ${productPrice}
                </div>
              </div>
              <button class="checkout-btn">CHECKOUT (&#8358 ${productPrice})</button>
            </div>
  `;

  document.querySelector('.js-cart-summary').innerHTML = paymentSummaryHTML
}