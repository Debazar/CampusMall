import React from "react";
import "./product.css"

function Product(props){
  return(
      <div>
        <div className="product">
          <div className="product_info">
            <p><b>{props.title}</b></p>
            <p className="product_price">${props.price}</p>
           <div><p className="product_rating">{props.rating}</p></div> 

          </div>

          <img src={props.img} />

           <button>Add To Cart</button>
        </div>
      </div>
  );
}

export default Product;