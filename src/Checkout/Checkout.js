import React from "react";
import Heading from "../heading/heading";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal";



function Checkout(){
  return (<div>
    <Heading/>
    <div className="checkout">

      <div className="checkoutLeft">

        <img src="https://e0.pxfuel.com/wallpapers/850/829/desktop-wallpaper-e-commerce-web-designing-development-company-e-commerce-thumbnail.jpg"   alt="advertisement"/>
        <div className="checkoutHeading">
           <h2>Your shopping Cart</h2>
           <Checkoutproduct />
        </div>
      </div>

      <div className="checkoutRight">
          <Subtotal />
      </div>

    </div>
  
    </div>)
};

export default Checkout; 