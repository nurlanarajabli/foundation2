

const shop = document.getElementById("productCard");

function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    shop.innerHTML = '';
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "productCard"; 
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="">
            <div class="cardBox">
                <h3>${item.title}</h3>
                <p>${item.price} $</p>
            </div>
            <button class="cardBtn" onclick="removeItem(${index})">Sebetden Sil</button>
        `;
        shop.appendChild(card); 
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
}

window.onload = () => {
    getCart();
};


