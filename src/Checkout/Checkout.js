import React from "react";
import Heading from "../heading/heading";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal";
import { UseStateValue } from "../StateProvider";



function Checkout(){
  const [{basket}, dispatch] = UseStateValue();
  return (<div>
    <Heading/>
    <div className="checkout">

      <div className="checkoutLeft">

        <img src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/8goAAOSwWmtmHkC7/$_57.JPG"  alt="advertisement"/>
        <div className="checkoutHeading">
           <h2>Your shopping Cart</h2>
           {basket.map(item=>(  <Checkoutproduct 
             title = {item.title}
             id = {item.id}
             image = {item.image}
             price = {item.price}
             rating = {item.rating}
           />))}
         
        </div>
      </div>

      <div className="checkoutRight">
          <Subtotal />
      </div>

    </div>
  
    </div>)
};

export default Checkout; 