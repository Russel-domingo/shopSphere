import { useOutletContext } from "react-router";

function Cart() {
    
    const { cartItems, removeFromCart, upDateQuantity} = useOutletContext();
    const totalPrice = cartItems.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    if (cartItems.length === 0) {
        return <p>Please add a product</p>
    }

    return (
        <div>
            <p>Total: {totalPrice.toFixed(2)}</p>
            <ul>
                {cartItems.map((product, index) => {
                return(
                    <li key={`${product.id}-${index}`}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <h2>{product.price}</h2>
                        <h2>{product.category}</h2>
                        <h2>{product.quantity}</h2>
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        <button onClick={() => upDateQuantity(product.id, 1)}>+</button>
                        <button onClick={() => upDateQuantity(product.id, -1)}>-</button>
                    </li>
                )    
                })}

    
            </ul>
        </div>
    );
}

export default Cart;