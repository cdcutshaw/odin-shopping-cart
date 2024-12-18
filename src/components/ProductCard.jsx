function ProductCard({product, addToCart}) {
    return (
        <div className="productCard">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard;