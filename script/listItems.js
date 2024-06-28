export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "001",
    image: "images/dbk3096.png",
    name: "MUNCH iT",
    price: 250,
  },
  {
    id: "002",
    image: "images/digestive-coaster_lgmbqt.png",
    name: "DIGESTIVE COASTER",
    price: 400,
  },
  {
    id: "003",
    image: "images/5.webp",
    name: "SHRIMP CRACKERS",
    price: 850,
  },
  {
    id: "004",
    image: "images/4.png",
    name: "SPEEDY MINI",
    price: 430,
  },
  {
    id: "005",
    image: "images/crispy-peanuts-mockups.png",
    name: "NUTZY PEANUTS",
    price: 150,
  },
  {
    id: "006",
    image: "images/1.png",
    name: "NA-SO POPCORN",
    price: 500,
  },
];
