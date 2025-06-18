const handleAddToCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  let name = productName.value;
  let quantity = productQuantity.value;
  saveProductToLocalStorage(name, quantity);
  displayCart(name, quantity);
  productName.value = "";
  productQuantity.value = "";
};

const displayCart = (name, quantity) => {
  const productList = document.getElementById("cart-list");
  const list = document.createElement("li");
  list.innerText = `${name}:${quantity}`;
  productList.appendChild(list);
};
const getProductFromLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

const displayProductFromLocalStorage = () => {

  const products = getProductFromLocalStorage();
  console.log(products);
  for (let product in products) {
    console.log(product);
    console.log(products[product]);
    displayCart(product,products[product]);

  }
};

const saveProductToLocalStorage = (name, quantity) => {
  let cart = getProductFromLocalStorage();
  cart[name] = quantity;

  const stringCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringCart);
};
displayProductFromLocalStorage();
