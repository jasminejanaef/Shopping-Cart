document.addEventListener('DOMContentLoaded', () => {
    const cart = new Map();
    let totalPrice = 0;
  
    // Function to add a product to the cart
    function addToCart(productName, productPrice) {
      if (cart.has(productName)) {
        cart.set(productName, cart.get(productName) + productPrice);
      } else {
        cart.set(productName, productPrice);
      }
      totalPrice += productPrice;
      document.getElementById('cart-textarea').value += `Added ${productName} for \$${productPrice.toFixed(2)} to the cart.\n`;
    }
  
    // Function to calculate and display the checkout total
    function checkout() {
      const uniqueProducts = Array.from(cart.keys()).join(', ');
      document.getElementById('cart-textarea').value += `You bought ${uniqueProducts} for \$${totalPrice.toFixed(2)}.`;
      document.querySelectorAll('button').forEach(button => button.disabled = true);
    }
  
    // Add event listeners to 'Add' buttons
    document.querySelectorAll('.add-product').forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        addToCart(productName, productPrice);
      });
    });
  
    // Add event listener to 'Checkout' button
    document.querySelector('.checkout').addEventListener('click', checkout);
  });
  