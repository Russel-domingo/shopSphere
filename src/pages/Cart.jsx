import { useOutletContext } from "react-router";

function Cart() {
    
    const { cartItems} = useOutletContext();
    const totalPrice = cartItems.reduce((total, product) => {
        return total + product.price;
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
                    </li>
                )    
                })}

                
            </ul>
        </div>
    );
}

export default Cart;