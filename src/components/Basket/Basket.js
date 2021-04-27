import React from "react";

const Basket = (props) => {
  // console.log(cartItems)
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <h4>Cart Items</h4>
      {cartItems.length === 0 && <div>Cart item empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-md-4">{item.name}</div>
          <div className="col-md-4">
            <button className="btn btn-danger me-1" onClick={() => onRemove(item)}>-</button>
            <button className="btn btn-primary" onClick={() => onAdd(item)}>+</button>
          </div>
          <div className="col-md-4">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
                <div >Items Price</div>
                <div >${itemsPrice.toFixed(2)}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="d-flex justify-content-between">
                <div >Tax Price</div>
                <div >${taxPrice.toFixed(2)}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="d-flex justify-content-between">
                <div >Shipping Price</div>
                <div >${taxPrice.toFixed(2)}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="d-flex justify-content-between">
                <div ><strong>Total Price</strong></div>
                <div ><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
          </div>

          <hr />

          <div className="row">
              <button className="btn btn-primary" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
        </>
      )}
    </div>
  );
};

export default Basket;
