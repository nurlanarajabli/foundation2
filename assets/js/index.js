const shop = document.querySelector("#productCard")
const count = document.querySelector(".cardButton")

let db
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then(res => {
        db = res.data.products;
        db.forEach((item) => {
            let box = document.createElement('div');
            box.className = "productCard";
            box.innerHTML = ` <img
        src = "${item.thumbnail}"
        alt="product"
      <div class="cardBox">
        <h3>${item.title}</h3>
        <p>${item.price}</p> </div>
        <button class="cardBtn" onclick="addToCard(${item.id})">Sebte ekle</button>
     
      `
            shop.appendChild(box);
        })
    })
}
// getAllProducts()
function addToCard(id) {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getAllProducts()
}
function add() {
    let cart= JSON.parse(localStorage.getItem('cart'))
    if (cart.length != 0) {
        count.innerHTML = cart.length
    } else {
        count.style.display = 'none'
    }

}
add()
// function CartCount () {
//     let cart = JSON.parse(localStorage.getItem('cart')) || []
//     cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping" style="font-size: 20px;"></i><p class="cartCount">${cart.length}</p>`
// }

// window.onload = () => {
//     CartCount()
// }
