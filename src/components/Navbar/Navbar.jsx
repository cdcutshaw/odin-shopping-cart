import { Link } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";

function Navbar() {
  return (
    <div className="navContainer">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <CartSummary />
    </div>
  );
}

export default Navbar;