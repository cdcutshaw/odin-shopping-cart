import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard/ProductCard";

function Shop() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false);
      })
      .catch((error) => { 
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="shopContainer">
      <h1>Shop here</h1>
      <div className="productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;