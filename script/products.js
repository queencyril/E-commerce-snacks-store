export const items = [{
  image: 'images/mimi chinchin.png',
  name:'MIMI CHINCHIN' ,
  price: 350 ,
}, {
  image: 'images/ok-pop.png',
  name:'OK-POP' ,
  price: 480,
  
}, {
  image: 'images/2.avif',
  name:'CARAMEL POPCORN' ,
  price:  950,
}, {
  image: 'images/9.webp',
  name:'BISCOFF' ,
  price:  550,
  
}, {
  image: 'images/8.webp',
  name:'PURE BLISS' ,
  price:  750,
  
}, {
  image: 'images/3.png',
  name:'ABACHA' ,
  price:  150,
  
},  {
  image: 'images/ok-pop.png',
  name:'OK-POP' ,
  price:480,
  
}, {
  image: 'images/2.avif',
  name:'CARAMEL POPCORN' ,
  price:  950,
}, {
  image: 'images/9.webp',
  name:'BISCOFF' ,
  price:  550,
  
}, {
  image: 'images/ok-pop.png',
  name:'OK-POP' ,
  price:  480,
  
}, {
  image: 'images/2.avif',
  name:'CARAMEL POPCORN' ,
  price:  950,
}, {
  image: 'images/9.webp',
  name:'BISCOFF' ,
  price:  550,
  
}]

let itemsHTML = '';

items.forEach((item) => {
  itemsHTML += `
    <div class="items">
          <div class="display-items">
            <a href="cart.html"><img src="${item.image}" alt="" class="display-img"></a>
          </div>
  
          <div class="item-info">
            <p class="item-name">${item.name}</p>
          <p class="item-price">&#8358 ${item.price} </p>

          <button class="js-add-to-cart-btn add-btn">ADD TO CART</button>
        </div>       
        </div>
  `;
});

// console.log(productsHTML)

document.querySelector('.popular-items').innerHTML = itemsHTML

document.querySelectorAll('.js-add-to-cart-btn').forEach((button) => {
  button.addEventListener('click', () =>{
    
  })
})

