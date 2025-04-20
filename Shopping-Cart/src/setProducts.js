

export default function getStoreItems(setStoreProducts)
{
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productsWithId = data.map((product) => ({
          ...product,
          key: crypto.randomUUID(),
          qtyInCart:0,
        }));
        setStoreProducts(productsWithId);
        console.log(productsWithId);
      })
      .catch((err) => console.error("Fetch error:", err));
    }

