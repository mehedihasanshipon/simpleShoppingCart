import React from "react";

const Products = ( props ) => {
  const{product,onAdd} = props;
  // console.log(props)
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
            style={{height:"400px"}}
          className="img-fluid card-img-top h-100"
          height="200px"
          src={product.image}
          alt=""
        />
        <div className="card-body">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={()=>onAdd(product)} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
