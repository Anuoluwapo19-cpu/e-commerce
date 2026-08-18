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
}

function saveCart(cart) {
    localStorage.setItem('boutiqueCart', JSON.stringify(cart));
}