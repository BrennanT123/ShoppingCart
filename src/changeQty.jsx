import { useStore } from "./storeContext.jsx";


export default function changeQty(key, num) {
  const { storeProducts, setStoreProducts, cartItems, setCartItems } = useStore();
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
}
