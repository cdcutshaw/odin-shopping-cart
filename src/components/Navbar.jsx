import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navContainer">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
        </div>
    )   
};
export default Navbar;