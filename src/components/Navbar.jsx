import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

function Navbar({ cart }) {
  return (
    <div className="navContainer">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <CartSummary cart={cart} />
    </div>
  );
}

export default Navbar;