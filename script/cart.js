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

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to show a Toastify notification
function showToast(message) {
  const toast = Toastify({
    text: message,
    duration: 3000, // Duration in milliseconds
    gravity: "top", // Show at the top
    position: "right", // Align to the right
    close: true, // Show close button
    className: "toastify", // Optional class name for styling i put this here but there is no class like toastify for now but you can always add it to style
    onClick: function () {
      toast.hideToast();
    },
  });

  toast.showToast();
}
// Saving to local Storage
export function saveToStorage(item) {
  localStorage.setItem("cart", JSON.stringify(item));
}

export function updateCartQuantity() {
  const uniqueItemsCount = new Set(cart.map((item) => item.id)).size;

  // Update .js-cart-total element for cart page
  const cartTotalElement = document.querySelector(".js-cart-total");
  if (cartTotalElement) {
    cartTotalElement.textContent = uniqueItemsCount.toString();
  }

  // Update .js-home-cart-total element for home page
  const homeCartTotalElement = document.querySelector(".js-home-cart-total");
  if (homeCartTotalElement) {
    homeCartTotalElement.textContent = uniqueItemsCount.toString();
  }
}

export function addToCart(event) {
  const productId = event.target.getAttribute("data-product-id");
  const product = products.find((p) => p.id == productId);

  // Check if the product is already in the cart
  if (!cart.some((item) => item.id == product.id)) {
    product.quantity = 1;
    cart.push(product);
    saveToStorage(cart);
    updateCartQuantity();
    showToast(`${product.name} has been added to cart.`);
  } else {
    showToast(`${product.name} is already in  cart.`);
  }
}

export function removeFromCart(productId) {
  // Find the product in the cart
  const indexToRemove = cart.findIndex((item) => item.id === productId);

  if (indexToRemove !== -1) {
    // Remove the item from the cart array
    cart.splice(indexToRemove, 1);

    // Save the updated cart to local storage
    saveToStorage(cart);

    // Update UI
    updateCartQuantity();

    // Alert the user
    const product = products.find((p) => p.id === productId);
    showToast(`${product.name} has been removed from cart.`);
  } else {
    console.error(`Product with ID ${productId} not found in cart.`);
  }
}
// Function to increment quantity
export function incrementQuantity(event) {
  const productId = event.target.getAttribute("data-product-id");
  const item = cart.find((item) => item.id == productId);

  if (item) {
    item.quantity++;
    saveToStorage(cart);
  } else {
    console.error(`Product with ID ${productId} not found in cart.`);
  }
}

// Function to decrement quantity
export function decrementQuantity(event) {
  const productId = event.target.getAttribute("data-product-id");
  const item = cart.find((item) => item.id == productId);

  if (item && item.quantity > 1) {
    item.quantity--;
    saveToStorage(cart);
  } else {
    console.error(
      `Product with ID ${productId} not found in cart or quantity cannot be decremented further.`
    );
  }
}
