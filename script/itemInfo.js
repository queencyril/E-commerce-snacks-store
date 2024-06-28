 const itemInfos = [
  {
    id: "001",
    image: "images/dbk3096.png",
    name: "MUNCH iT",
    price: 250,
  },
  // {
  //   id: "002",
  //   image: "images/digestive-coaster_lgmbqt.png",
  //   name: "DIGESTIVE COASTER",
  //   price: 400,
  // },
  // {
  //   id: "003",
  //   image: "images/5.webp",
  //   name: "SHRIMP CRACKERS",
  //   price: 850,
  // },
  // {
  //   id: "004",
  //   image: "images/4.png",
  //   name: "SPEEDY MINI",
  //   price: 430,
  // },
  // {
  //   id: "005",
  //   image: "images/crispy-peanuts-mockups.png",
  //   name: "NUTZY PEANUTS",
  //   price: 150,
  // },
  // {
  //   id: "006",
  //   image: "images/1.png",
  //   name: "NA-SO POPCORN",
  //   price: 500,
  // },
];

let itemInfosHTML = '';

itemInfos.forEach((iteminfo) =>{
   itemInfosHTML += `
     <div class="iteminfo ">
        <img src="${iteminfo.image}">
         

      <div class="product-details">
        <h3>${iteminfo.name} -100g</h3>
      <p class="brand">Brand: Fries</p>
      <p class="price2">&#8358 ${iteminfo.price} </p>
      <p class="units">Few units left</p>
      <button class="add-btn">ADD TO CART</button>
      <div class="linebreak"></div>
      

      <div class="promotions">
        <p class="promotion-title">PROMOTIONS</p>
        <P class="promotion">Call <span>09156080037</span>  To Place Order</P>
        <p class="promotion">Need extra money? Loan up to N50,000 on the YemYem Andriod app.</p>
        <p class="promotion">Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
      </div>
    </div>
    </div>
  `;
  
});

console.log (itemInfosHTML);

document.querySelector('.js-item-info').innerHTML = itemInfosHTML;



