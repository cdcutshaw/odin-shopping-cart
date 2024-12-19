import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDetails from "../CartDetails/CartDetails";
import { FaShoppingCart } from "react-icons/fa";

function CartSummary() {
  const [showModal, setShowModal] = useState(false);
  const [showHoverPrompt, setShowHoverPrompt] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        className="cartSummaryContainer"
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setShowHoverPrompt(true)}
        onMouseLeave={() => setShowHoverPrompt(false)}
      >
        <FaShoppingCart className="cartIcon" />
        <span>{totalItems} items</span>
        {showHoverPrompt && <span className="cartHoverPrompt">Go to cart</span>}
      </div>
      {showModal && <CartDetails onClose={() => setShowModal(false)} />}
    </>
  );
}

export default CartSummary;