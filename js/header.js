function updateHeader() {
    let cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        let cart = getCart();

        let totalItem = 0;
        for(let i= 0; i < cart.length; i++){

            totalItem += cart[i].quantity
        }
        cartCountElement.textContent = totalItem;
    }
    let authLinks = document.getElementById('auth-links');
    if (authLinks) {
        let loginUser = getLoginUser();
        authLinks.innerHTML = `
        Hi, ${loginUser.name} | <a href ="#" id ="logout-link">Logout</a>
        `
        let logoutLink = document.getElementById('logout-link');
        logoutLink.addEventListener('click', function(event){
            event.preventDefault();
            logoutUser();
        });

    }else{
        authLinks.innerHTML = '<a href ="login.html">Login</a>'
    }

}
updateHeader();