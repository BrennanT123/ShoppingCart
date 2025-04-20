import { createContext, useState, useContext } from "react";

// Create the context
const StoreContext = createContext();

// Custom hook (optional but nice)
export const useStore = () => useContext(StoreContext);

// Create a provider component
export const StoreProvider = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState([]);
  const [cartItems, setCartItems] = useState(
    {
        items: [],
        totalPrice: 0,
        totalItems: 0,
    }
  );

  return (
    <StoreContext.Provider value={{ storeProducts, setStoreProducts, cartItems,setCartItems }}>
      {children}
    </StoreContext.Provider>
  );
};
