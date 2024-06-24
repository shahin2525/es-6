const addProduct = () => {
  const productNameField = document.getElementById("product-name");
  const productQuantityField = document.getElementById("product-quantity");
  const productName = productNameField.value;
  const productQuantity = productQuantityField.value;

  displayProductData(productName, productQuantity);
  savedLocalStorageData(productName, productQuantity);
  //   getLocalStorageData(productName, productQuantity);
  productNameField.value = "";
  productQuantityField.value = "";
};

const displayProductData = (productName, productQuantity) => {
  const ul = document.getElementById("unorder");
  const li = document.createElement("li");
  li.innerText = `${productName}: ${productQuantity}`;
  ul.appendChild(li);
};

const getLocalStorageData = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const savedLocalStorageData = (productName, productQuantity) => {
  cart = getLocalStorageData();
  cart[productName] = productQuantity;
  const setLocalStorage = JSON.stringify(cart);
  localStorage.setItem("cart", setLocalStorage);
};

const displayLocalStorageData = () => {
  const savedData = getLocalStorageData();
  for (const product in savedData) {
    const quantity = savedData[product];
    displayProductData(product, quantity);
  }
  //   console.log(savedData);
};
displayLocalStorageData();
