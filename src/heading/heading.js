import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./heading.css";

function Heading(){
  return(
  <div className="header">
    <div className="header_logo">
     <LocalMallOutlinedIcon className="header_logoImage" fontSize="large"/>
     <h2 className='header_title'>Campus Mall</h2>
    </div>

    <div className="header_search">
     <input type='text' className='header_inputSearch' placeholder='Search for products, Brands and Categories'/>
     <SearchIcon className='header_searchIcon'/>
    </div>


    <div className="header_nav">
      <div className="nav_item">
        <span className="nav_itemOne">Hello Guest</span>
        <span className="nav_itemTwo">Sign in</span>
      </div>
      <div className="nav_item">
        <span className="nav_itemOne">Your</span>
        <span className="nav_itemTwo">Shop</span>
      </div>
      <div className="nav_item nav_itemR">
        <ShoppingCartOutlinedIcon className="itemCart" fontSize='large'/>
        <span className="nav_itemtwo nav_cartCount">0</span>
      </div>
    </div>
  </div>
  );
}

export default Heading;