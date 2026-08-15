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
}

function addToCart(productId) {
    
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