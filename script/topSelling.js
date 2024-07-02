import { cart, addToCart } from "../script/cart.js";
import { products } from "../script/listItems.js";
import { items } from "../script/products.js";
import { features } from "../script/featured.js";


const categories = [...new Set(products.map((itemList) => { return itemList }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((itemList) => {
        return (
          itemList.name.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

// let productsHTML = "";

// products.forEach((product) => {
//   productsHTML += `
//     <div class="items">
//           <div class="display-items">
//             <a href="itemInfo.html"><img src="${product.image}" alt="" class="display-img"></a>
//           </div>
  
//           <div class="item-info">
//             <p class="item-name">${product.name}</p>
//           <p class="item-price">&#8358 ${product.price} </p>

//           <button class="js-add-btn add-btn" data-product-id='${product.id}' >ADD TO CART</button>
//         </div>       
//         </div>
//   `;
// });


const displayItem = (itemLists) => {
  document.getElementById('root').innerHTML = itemLists.map((itemList) => {
      var { id, image, name, price } = itemList;
  return(
    `
    <div class="items">
        <div class="display-items">
          <a href="itemInfo.html"><img src="${image}" alt="" class="display-img"></a>
        </div>

        <div class="item-info">
          <p class="item-name">${name}</p>
        <p class="item-price">&#8358 ${price} </p>

        <button class="js-add-btn add-btn" data-product-id='${id}' >ADD TO CART</button>
      </div>       
      </div>

    `
  )
}).join('')
};
displayItem(categories);


// console.log(productsHTML)

// document.querySelector(".js-items").innerHTML = productsHTML;

document.querySelectorAll(".js-add-btn").forEach((button) => {
  button.addEventListener("click", addToCart);
});

const uniqueItemsCount = new Set(cart.map((item) => item.id)).size;

// Update the cart quantity display in the DOM
document.querySelector(".js-home-cart-total").textContent =
  uniqueItemsCount.toString();
