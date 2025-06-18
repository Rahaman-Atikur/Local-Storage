const handleAddToCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  let name = productName.value;
  let quantity = productQuantity.value;
  setToLocalStorage(name,quantity);
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

const setToLocalStorage = (name,quantity) => {
  const cartObject = {itemName: name,itemNumber:quantity};
  localStorage.setItem("cart",JSON.stringify(cartObject));
};
