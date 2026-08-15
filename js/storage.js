function getCart(){
    let cartText = localStorage.getItem('boutiqueCart');
    if(cartText) {
        return JSON.parse(cartText)
    }

    return [];
}