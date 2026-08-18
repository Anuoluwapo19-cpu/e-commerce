function renderProducts(category) {
      let grid = document.getElementById('product-grid');
      grid.innerHTML= ''
      

      for(let i =0; i<products.length; i++){
            let product = products[i]
            if(category !== "all" && product.category !== category){
                continue;
            }

            let card = document.createElement('div');
            card.className = "product-card"
            card.innerHTML = 
            `<img src="${product.image}" alt ="${product.name}" >`+
            `<h3>${product.name}</h3>`+
            `<p class="product-category">${product.category}</p>`+
            `<p class="product-price">${product.price.toFixed(2)}</p>`+
            `<button class ="btn add-to-cart-btn" data-id = '${product.id}'>Add to cart</button>`

            grid.appendChild(card)

      }
      let addButtons = document.querySelectorAll('.add-to-cart-btn')
      addButtons.forEach(function(button){
         button.addEventListener('click', function(){
            let productId = Number(this.getAttribute('data-id'))
            addToCart(productId)

         })

      })

}

function addToCart(productId) {
    let product = null;
    for(let i= 0; i<products.length; i++) {
          if(products[i].id === productId){
            product = products[i]
            break
          }
    };

    if(!product) {
        return 
    };
    let cart = getCart();
    let alreadyInCart = false;
    for(let j=0; j< cart.length; j++){
       if (cart[j].id === product.id){
        cart[j].quantity = cart[j].quantity+1
        alreadyInCart = true;
        break
       }
    }
    if(!alreadyInCart){
        cart.push({
            id: product.id, 
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        })
    }
    saveCart(cart)
    alert(`${product.name} was added to cart`)

}



let filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(function (button){
    button.addEventListener("click", function(){
        filterButtons.forEach(function(b){
            b.classList.remove('active')
        });
        this.classList.add('active')
        let category = this.getAttribute('data-category');
        renderProducts(category)

    });
});




renderProducts('all')