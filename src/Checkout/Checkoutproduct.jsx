import React from "react";
import "./Checkoutproduct.css";
import { UseStateValue } from "../StateProvider";
import { type } from "@testing-library/user-event/dist/type";

function Checkoutproduct(props){
  const [{basket}, dispatch] = UseStateValue();
  const removeFromBasket = ()=>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id : props.id
    })
  }
  return(
    <div className="checkoutProduct">
    <img src={props.image}  alt="item in the basket"/> 

    <div className="checkoutProductInfo">
      <p className="checkoutProductTitle">{props.title}</p>
      <p className="checkoutProductPrice">
        <small>$</small>
        <strong>{props.price}</strong>
      </p>
      <div className="checkoutProductRating">
         {props.rating}
      </div>
      <button onClick={removeFromBasket}>Remove Item</button>

    </div>

  </div>
  )
};
  




export default Checkoutproduct;