import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./heading.css";
import { Link } from "react-router-dom";
import { UseStateValue } from '../StateProvider';



function Heading(){

  const [{basket}, dispatch]=  UseStateValue();
   
  return(
  <div className="header">
    <Link to= "/" style={{textDecoration: "none"}}>
    <div className="header_logo">
     <LocalMallOutlinedIcon className="header_logoImage" fontSize="large"/>
     <h2 className='header_title'>Campus Mall</h2>
    </div>
    </Link>

    <div className="header_search">
     <input type='text' className='header_inputSearch' placeholder='Search for products, Brands and Categories'/>
     <SearchIcon className='header_searchIcon'/>
    </div>


    <div className="header_nav">
      
      <Link to="/login" style={{textDecoration: "none"}} >
      <div className="nav_item">
        <span className="nav_itemOne">Hello Guest</span>
        <span className="nav_itemTwo">Sign in</span>
      </div>
      </Link>

      <div className="nav_item">
        <span className="nav_itemOne">Your</span>
        <span className="nav_itemTwo">Shop</span>
      </div>

      <Link to = "/checkout" style={{textDecoration: "none"}}>
      <div className="nav_item nav_itemR">
        <ShoppingCartOutlinedIcon />
        <span className="nav_itemtwo nav_cartCount">{basket.length}</span>
       
      </div>
      </Link>
    </div>
  </div>
  );
}

export default Heading;