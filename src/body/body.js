import React from "react";
import "./body.css";
import Product from "../product/product";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


function Body(){
  return(
    <div className="body_page">
     <div className="body_container">
         
       <img src="https://e0.pxfuel.com/wallpapers/850/829/desktop-wallpaper-e-commerce-web-designing-development-company-e-commerce-thumbnail.jpg" alt="ecommerce background" className="body_image"/>

       <div className="body_rows">
        <Product
        title = {"JanSport Backpack with 15-inch Laptop Sleeve, Navy - Large Computer Bag Rucksack with 2 Compartments, Ergonomic Strap"}
        price = {50.08}
        rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>]}
        img = "https://m.media-amazon.com/images/I/61vef8697OL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
        title = {"Geometry Set for Students, Math Protractor Compass with Rulers, Box of Protactor Kit for Class Supplies and School, 12 Pcs"}
        price = {12.49}
        rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,]}
        img = "https://m.media-amazon.com/images/I/81wDvO+xxxL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
        title = {"100 Pack A5 Colorful Ruled Lined Mini Notebook Journals Bulk, Soft Cover Kraft Composition Notepad Memo Cuadernos for Girls,"}
        price = {63.94}
        rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarOutlineIcon/>]}
        img = "https://m.media-amazon.com/images/I/71wvRbb-t7L._AC_UL640_FMwebp_QL65_.jpg"
        />
       </div>

       <div className="body_rows">
        <Product
        title = {"40 Pcs Color Changing Mood Pencil with Motivational Sayings Inspirational Pencils 2b Changing Pencil Heat Assorted"}
        price = {11.99}
        rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarOutlineIcon/>]}
        img = "https://m.media-amazon.com/images/I/81hVk81LRKL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
         title = {"16 Pack Color Stacking Stools Classroom Stackable Stool Plastic Stack Stool Round Stacking Stool Set Student Round Stool"}
         price = {174.99}
         rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,<StarOutlineIcon/>]}
         img = "https://m.media-amazon.com/images/I/71Y-nWfc0mL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
         title = {"Student Lab Notebook Spiral Bound: 100 Carbonless Duplicate Sets"}
         price = {33.90}
         rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,]}
         img = "https://m.media-amazon.com/images/I/81kgilgomsL._AC_UL640_FMwebp_QL65_.jpg"
        />
       </div>

       <div className="body_rows">
        <Product
         title = {"The Student (Tanglewood University Book 2)"}
         price = {4.99}
         rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,<StarOutlineIcon/>]}
         img = "https://m.media-amazon.com/images/I/61oWcGzHO0L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
         title = {"24 Pack Basic Calculators for Students, Pocket Calculator Bulk Classroom Mini Calculators Solar and Battery Dual Powered Handheld Calculator 8 Digit Display for Office School and Home"}
         price = {32.99}
         rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,]}
         img = "https://m.media-amazon.com/images/I/817pb9XQz6L._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          title = {"Factory Direct Partners 10377-LG 10 School Stack Chair, Stacking Student Seat with Chromed Steel Legs and Ball Glides for in-Home"}
          price = {127.50}
          rating = {[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>]}
          img = "https://m.media-amazon.com/images/I/61U4qqNApdL._AC_UL640_FMwebp_QL65_.jpg" 
       />
       </div>

     </div>
    </div>

  );
}

export default Body;