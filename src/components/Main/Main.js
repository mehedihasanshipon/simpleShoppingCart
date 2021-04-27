import React from "react";
import Basket from "../Basket/Basket";
import Products from "../Products/Products";
import './Main.css'

const Main = (props) => {
    const {products,onAdd,cartItems,onRemove} = props;
    // console.log(products)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 ">
          <main className="main ">
            <div className="row">
            {
              products.map(product => <Products key={product.id} onAdd={onAdd} product={product} />)
            }
            </div>
          </main>
        </div>
        <div className="col-md-4 ">
          <aside className="basket">
            <Basket cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Main;
