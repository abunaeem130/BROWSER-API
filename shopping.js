const displayLocalStorageCart = () => {
    const cart = getcart();
    for (const name in cart)
        displayProduct(name);
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    // display in the ui
    displayProduct(name);
    // add to local storage
    addProductToCart(name);
    // clear
    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getcart = () => {
    const cart = localStorage.getItem('cart');
    let cardObj;
    if (cart) {
        cardObj = JSON.parse(cart)
    }
    else {
        cardObj = {};
    }
    return cardObj;
}
const addProductToCart = (name) => {
    const cart = getcart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    console.log(cart);
    const cartStringfyed = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfyed)
}

// place order
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart()