import { useState } from "react";
import headerStyles from "./styles/headerStyles.module.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShopFooter from "./ShopFooter";
import ShopHeader from "./header";
import homepageStyles from "./styles/homepageStyles.module.css";
import { useStore } from "./storeContext.jsx";
import productStyles from "./styles/productStyles.module.css";
import getStoreItems from "./setProducts.js";

function Products() {
  const { storeProducts, setStoreProducts, cartItems, setCartItems } = useStore();
  const changeQty = (key, num) => {
    setStoreProducts((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          if (item.qtyInCart + num >= 0) {
            {
              return { ...item, qtyInCart: (item.qtyInCart || 0) + num };
            }
          }
        }
        return item;
      })
    );

    let tempArr = [];
    for (let i = 0; i < storeProducts.length; i++) {
      if (storeProducts[i].qtyInCart > 0) {
        tempArr = [...tempArr, storeProducts[i]];
      }
    }

    setCartItems((prev) => ({ ...prev, items: tempArr }));
  };

  useEffect(() => {
    if (storeProducts.length > 0) {
      return;
    }
    getStoreItems(setStoreProducts);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <ShopHeader></ShopHeader>
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div className={homepageStyles.featuredProductsContainer}>
          <div className={homepageStyles.featuredProducts}>
            {storeProducts.map((e, index) => {
              return (
                <div className={productStyles.productsContainer} key={e.key}>
                  <div className={productStyles.product}>
                    <img src={e.image} alt="title" />
                  </div>
                  <div
                    className={`${homepageStyles.oswald} ${productStyles.productInfo}`}
                  >
                    {e.title}
                  </div>
                  <div
                    className={`${homepageStyles.oswald} ${productStyles.productInfo}`}
                  >
                    ${e.price}
                  </div>
                  <div className={productStyles.addToCartContainer}>
                    <div className={productStyles.addToCartContainer}>
                      <button onClick={() => changeQty(e.key, -1)}>-</button>
                      <div className={`${homepageStyles.oswald}`}>
                        {e.qtyInCart || 0}
                      </div>
                      <button onClick={() => changeQty(e.key, 1)}>+</button>
                    </div>
                  </div>
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
export default Products;
