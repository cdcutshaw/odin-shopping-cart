function CartSummary ({ cart }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return <span className="cartSummary">Cart: {totalItems} items</span>
}
export default CartSummary;