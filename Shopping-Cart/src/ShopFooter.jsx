import { useState } from 'react'
import footerStyles from './styles/footerStyles.module.css'
import { StrictMode } from "react";
import { Link } from "react-router-dom";
import './App.css'
import Products from './products.jsx';
import Cart from './cart.jsx';

function ShopFooter() {



  const [count, setCount] = useState(0)

  // YOu are currently working on adding the hover state. You got hungry and left. 
  const [naviHover, setNaviHover] = useState(false);
  const [qty, setQty] = useState(0);

  return (
    <>
    <footer className={footerStyles.footerContainer}>
        <div className={`${footerStyles.oswald} ${footerStyles.newsletter}`}>Join our newsletter!</div>
        <input type="text" />
        <button>Submit</button>
    </footer>
    </>
  )
}

export default ShopFooter