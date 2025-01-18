// Initialize the cart as an empty array
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Function to update the cart display and total price
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Clear the current cart items
    cartItems.innerHTML = "";

    // Calculate total price
    let totalPrice = 0;

    // Add each item in the cart to the display
    cart.forEach((item, index) => {
        totalPrice += item.price;
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        // Add a remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);
    updateCart();
}

// Function to simulate checkout with XION
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items before checking out.");
        return;
    }

    // Simulate a checkout process
    alert("Proceeding to checkout with XION. Transaction is walletless and gasless!");
    // Reset the cart after checkout
    cart = [];
    updateCart();
}
