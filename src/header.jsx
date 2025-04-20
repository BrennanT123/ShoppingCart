import { useEffect, useState } from 'react'
import headerStyles from './styles/headerStyles.module.css'
import { StrictMode } from "react";
import { Link } from "react-router-dom";
import './App.css'
import Products from './products.jsx';
import Cart from './cart.jsx';
import { useStore } from './storeContext.jsx';

function ShopHeader() {
  const { storeProducts, setStoreProducts, cartItems, setCartItems } = useStore();
  const [naviHover, setNaviHover] = useState(false);

  useEffect(() => {
  
    setCartItems((prev) => ({
      ...prev,
      totalItems: storeProducts.reduce((sum, item) => sum + item.qtyInCart, 0),
      totalPrice: storeProducts.reduce((sum, item) => sum + item.qtyInCart*item.price, 0),
    }));
  }, [storeProducts]);




  return (
    <>
    <div className={headerStyles.headerContainer}>
      <header className={headerStyles.headerContent}>
        <div className={headerStyles.headerLeft}>
          <div className={headerStyles.naviContainer} onMouseEnter={()=> setNaviHover(true)} onMouseLeave={()=> setNaviHover(false)}>
            <img src="./src/assets/list.png" alt="navi" className={headerStyles.naviIcon} />
            <ul className={`${headerStyles.navi} ${naviHover ? headerStyles.visibleNavi : ''}`}>
            <Link to ="/"><li>Home</li></Link>
            <Link to = "/products"><li>Products</li></Link>
            <Link to = "/cart"><li>Cart</li></Link>
            </ul>
            </div>
          <div className={`${headerStyles.shopName} ${headerStyles.oswald}`}>Shop Name</div>
        </div>
        <div className={headerStyles.headerRight}>
          <div><Link to = "/cart"><img src="./src/assets/grocery-store.png" alt="cart" className={headerStyles.cartIcon} /></Link></div>
          <div className={headerStyles.qty}>{cartItems.totalItems}</div>
        </div>
      </header>
    </div>

    </>
  )
}

export default ShopHeader