document.addEventListener("DOMContentLoaded", function () {

    let cart = getCart();

    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("checkout-total");
    let checkoutForm = document.getElementById("checkout-form");
    let orderSuccess = document.getElementById("order-success");
    let checkoutWrapper = document.querySelector(".checkout-wrapper");

    let total = 0;


    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>
                Your cart is empty.
                <a href="index.html">Continue shopping</a>
            </p>
        `;

        checkoutTotal.textContent = "₦0.00";

        checkoutForm.style.display = "none";

        return;
    }


    cart.forEach(function (item) {

        let subtotal = item.price * item.quantity;

        total += subtotal;

        let itemElement = document.createElement("div");

        itemElement.className = "checkout-item";

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">

            <div class="checkout-item-info">
                <h4>${item.name}</h4>

                <p>
                    ₦${item.price.toFixed(2)} × ${item.quantity}
                </p>
            </div>

            <strong>
                ₦${subtotal.toFixed(2)}
            </strong>
        `;

        checkoutItems.appendChild(itemElement);
    });


    checkoutTotal.textContent = `₦${total.toFixed(2)}`;

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();


        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let payment = document.getElementById("payment").value;


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            address === "" ||
            payment === ""
        ) {
            alert("Please fill in all the required information.");
            return;
        }


        orderSuccess.style.display = "block";

        checkoutWrapper.style.display = "none";

        saveCart([]);


        let cartCount = document.getElementById("cart-count");

        if (cartCount) {
            cartCount.textContent = "0";
        }


        orderSuccess.scrollIntoView({
            behavior: "smooth"
        });


        console.log("Order Details:", {
            name: name,
            email: email,
            phone: phone,
            address: address,
            payment: payment,
            total: total
        });

    });

});