import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Shop() {
    const {addToCart } = useOutletContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products", error ));
       
    }, []);

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
    )   
}
export default Shop;