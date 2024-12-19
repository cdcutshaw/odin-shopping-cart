import { useCart } from "../context/CartContext";

function CartDetails({ onClose }) {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartModal">
      <div className="cartModalContent">
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cartItem">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <button className="checkoutButton">Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDetails;