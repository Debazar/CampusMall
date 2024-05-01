import React from "react";
import "./product.css"
import { UseStateValue } from "../StateProvider";
import { type } from "@testing-library/user-event/dist/type";

function Product(props){

  const [state,dispatch] = UseStateValue();

  const addToBasket = ()=>{
    dispatch(
      {
        type: "ADD_TO_BASKET",
        item: {
           id: props.id,
           title: props.title,
           image : props.img,
           price : props.price,
           rating: props.rating,
        },
      }
    );
  };

  return(
      <div>
        <div className="product">
          <div className="product_info">
            <p><b>{props.title}</b></p>
            <p className="product_price">${props.price}</p>
           <div><p className="product_rating">{props.rating}</p></div> 

          </div>

          <img src={props.img} />

           <button onClick={addToBasket}>Add To Cart</button>
        </div>
      </div>
  );
}

export default Product;