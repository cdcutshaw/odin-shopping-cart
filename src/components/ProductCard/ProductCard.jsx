import styles from "./ProductCard.module.css"
import { useCart } from "../../context/CartContext";
 
function ProductCard({ product }) {
  const { addToCart } = useCart(); // Access addToCart directly

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;