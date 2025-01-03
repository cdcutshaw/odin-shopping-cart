import { Link } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <header className={styles.navContainer}>
      
      <div className="nav">
       
        <Link to="/"><img src="./public/logo-blue.png" alt="Logo" /> </Link>
        <Link to="/shop">Shop</Link>
      </div>
      <h1 >Basic & Beyond </h1>
      
      <CartSummary />
    </header>
  );
}

export default Navbar;