import { useState } from "react";
import homepageStyles from "./styles/homepageStyles.module.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
import ShopHeader from "./header.jsx";
import ShopFooter from "./ShopFooter.jsx";
import { useEffect } from "react";
import productStyles from "./styles/productStyles.module.css";
import { useStore } from './storeContext.jsx';
import getStoreItems from "./setProducts.js";

function App() {
  const { storeProducts, setStoreProducts } = useStore();


  useEffect(() => {
    if (storeProducts.length > 0) {
      return;
    }
    getStoreItems(setStoreProducts)
  }, []);


  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <ShopHeader storeProducts={storeProducts} setStoreProducts={setStoreProducts}></ShopHeader>
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div className={homepageStyles.welcomeBox}>
          <div
            className={`${homepageStyles.welcomeName} ${homepageStyles.oswald}`}
          >
            Welcome to Shop Name
          </div>
          <div className={homepageStyles.welcomeDescription}>
            Shop items for normal prices
          </div>
          <Link to = "/products"><div className={homepageStyles.welcomeProducts}>Explore Products</div></Link>
        </div>
        <div className={homepageStyles.featuredProductsContainer}>
        <div
            className={`${homepageStyles.featuredProductsName} ${homepageStyles.oswald}`}
          >
            Featured Products
          </div>
          <div className={homepageStyles.featuredProducts}>
            {storeProducts.map((e, index) => {
              if (index > 11) {
                return;
              }

              return (
                <div key={e.key} className={homepageStyles.product}>
                  <img src={e.image} alt="title" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ShopFooter></ShopFooter>
    </div>
  );
}

export default App;
