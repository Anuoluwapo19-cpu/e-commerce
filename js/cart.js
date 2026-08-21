function renderCart() {
    let cart = getCart();
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotalElement = document.getElementById('cart-total');
    let emptyMessage = document.getElementById('empty-cart-message');
    
    cartItemsContainer.innerHTML= '';
    if(cart.length === 0){
        emptyMessage.style.display = 'block';
        cartTotalElement.textContent = '₦0.00';
        return;
    }
    emptyMessage.style.display = "none";
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        let item = cart[i];
        let subTotal = item.price * item.quantity;
        total += subTotal;


        let row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
        <img src = "${item.image}" alt = "${item.name}"/>
        <div class = "cart-item-info">
        <h4> ${item.name}  </h4>
        <p> ${item.price.toFixed(2) } X ${item.quantity}</p>
         </div> 
         <p class = "cart-item-subtotal"> ${subTotal.toFixed(2)} </p>
         <button class = "btn btn-danger remove-btn" data-id = '${item.id}'> Remove </button>
        `;
         cartItemsContainer.appendChild(row)


    }
    cartTotalElement.textContent = `₦ ${total.toFixed(2)}`
    let removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function(button){
        button.addEventListener('click', function(){
            let productId = Number(this.getAttribute('data-id'))
            removeFromCart(productId)
        })
    })
}




function removeFromCart(productId) {
    let cart = getCart();

    let item = cart.find(function(item) {
        return item.id === productId;
    });

    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(function(item) {
                return item.id !== productId;
            });
        }
    }

    saveCart(cart);
    renderCart();
}
 renderCart();