import React from "react";
import "./Checkoutproduct.css";

function Checkoutproduct(){
  return(
    <div className="checkoutProduct">
    <img src="https://m.media-amazon.com/images/I/61vef8697OL._AC_UL640_FMwebp_QL65_.jpg"  alt="item in the basket"/> 

    <div className="checoutproductInfo">
      <p className="checkoutproductTitle">"JanSport Backpack with 15-inch Laptop Sleeve, Navy - Large Computer Bag Rucksack with 2 Compartments, Ergonomic Strap"</p>
      <p className="checkoutproductPrice">
        <small>$</small>
        <strong>20</strong>
      </p>
      <div className="checkoutproductRating">
         ⭐️⭐️⭐️⭐️⭐️
      </div>
      <button>Remove Item</button>

    </div>

  </div>
  )
};
  




export default Checkoutproduct;