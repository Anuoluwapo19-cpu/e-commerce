function getCart(){
    let cartText = localStorage.getItem('boutiqueCart');
    if(cartText) {
        try{
        return JSON.parse(cartText)
        } catch(e){
            localStorage.removeItem('boutiqueCart');
        }
    }

    return [];
};

function saveCart(cart) {
    localStorage.setItem('boutiqueCart', JSON.stringify(cart));
};



function getLoginUser() {
    let isLoggedIn = localStorage.getItem('isLoggedIn')
    let name = localStorage.getItem('currentUserName');
    let email = localStorage.getItem('currentUser')
    if (isLoggedIn === 'true' && name ) {
        return {name, email};
    }

    return null;

}

function logoutUser() {
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserName');
    window.location.href = "index.html"
}