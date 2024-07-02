// const product = [
//   {
//     id: "001",
//     image: "images/dbk3096.png",
//     name: "MUNCH iT",
//     price: 250,
//   },
//   {
//     id: "002",
//     image: "images/digestive-coaster_lgmbqt.png",
//     name: "DIGESTIVE COASTER",
//     price: 400,
//   },
//   {
//     id: "003",
//     image: "images/5.webp",
//     name: "SHRIMP CRACKERS",
//     price: 850,
//   },
//   {
//     id: "004",
//     image: "images/4.png",
//     name: "SPEEDY MINI",
//     price: 430,
//   },
//   {
//     id: "005",
//     image: "images/crispy-peanuts-mockups.png",
//     name: "NUTZY PEANUTS",
//     price: 150,
//   },
//   {
//     id: "006",
//     image: "images/1.png",
//     name: "NA-SO POPCORN",
//     price: 500,
//   },
// ]

import { products } from "../script/listItems.js";

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

const displayItem = (itemLists) => {
    document.getElementById('root').innerHTML = itemLists.map((itemList) => {
        var { image, name, price } = itemList;
    return(
      `
      <div class="items">
          <div class="display-items">
            <a href="itemInfo.html"><img src="${image}" alt="" class="display-img"></a>
          </div>
  
          <div class="item-info">
            <p class="item-name">${name}</p>
          <p class="item-price">&#8358 ${price} </p>

          <button class="js-add-btn add-btn" data-product-id='${products.id}' >ADD TO CART</button>
        </div>       
        </div>

      `
    )
  }).join('')
};
displayItem(categories);





