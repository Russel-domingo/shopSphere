import { useOutletContext } from "react-router";
import { Link } from "react-router";

function Cart() {
    
    const { cartItems, removeFromCart, upDateQuantity} = useOutletContext();
    const totalPrice = cartItems.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    if (cartItems.length === 0) {
        return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Your Cart Is Empty</h1>
            <Link to="/shop"> <p className="text-gray-500">Please add a product</p> </Link>
        </div>)
    }

    return (
        <main className="min-h-screen bg-gray-500 px-6 py-10">
            <div className="mx-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <section className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-6"> Your Items({cartItems.length})</h2>

                        {cartItems.map((product, index) => {
                        return(
                            <div key={`${product.id}-${index}`} className="flex flex-col sm:flex-row items-center gap-5 border-b py-6">
                                <img src={product.image} alt={product.title} className="w-24 h-24 object-contain"/>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <p className="text-gray-500 text-sm">{product.category}</p>
                                    <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl">
                                    <button
                                        onClick={() => upDateQuantity(product.id, -1)}
                                        className="border rounded px-3 py-1 hover:bg-black hover:text-white"
                                    >
                                        -
                                    </button>
                                        <span>{product.quantity}</span>
                                     <button
                                        onClick={() => upDateQuantity(product.id, 1)}
                                        className="border rounded px-3 py-1 hover:bg-black hover:text-white" 
                                    >
                                        +
                                    </button>
                                </div>

                                <button onClick={() => removeFromCart(product.id)} className="text-white hover:text-black bg-amber-950 rounded py-2 px-2">
                                    remove
                                </button>
                            </div>
                        )    
                        })}
                    </section>

                      <aside className="bg-white rounded-xl p-6 shadow-sm h-fit">
                        <h2 className="text-xl font-semibold mb-6">
                        Order Summary
                        </h2>

                        <div className="flex justify-between mb-4">
                        <span className="text-gray-500">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-4">
                        <span className="text-gray-500">Shipping</span>
                        <span>Free</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-lg mb-6">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Checkout
                        </button>
                    </aside>
                </div>
            </div>
        </main>
        
    );
}

export default Cart;