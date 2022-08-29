//https://www.codewars.com/kata/587593285448632b8d000143/train/javascript
async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  const zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;

  const shippingRate = await calculateShipping(shoppingCart, zipCode);

  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  );
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}


//https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript

ShoppingCart.prototype.addButtonClicked = function (item) {
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  if (quantity > 0) {
    this.addToCartAsync(item, 1, (...params) =>
      this.addButtonClicked2(...params)
    );
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
  if (success) {
    const context = this;
    this.updateCartDisplayAsync(() => {
      context.addButtonClicked3.apply(context, arguments);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  this.showMessage(
    `${success ? "Successfully" : "Unsuccessfully"} added item to cart`
  );
};
