import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard";
function Shop(){
    const { addToCart} = useOutletContext();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                if(!response.ok) {
                    throw new Error("HTTP status: " + response.status);
                }
                const productData = await response.json();
                setProducts(productData);
                setError(null);
            } catch(err) {
               setError(err.message); 
            } finally {
                setIsLoading(false);
            }
        }

        fetchProduct();
    },[]);

    console.log(products);

    if(isLoading) {
        return <p>Loading products</p>
    }

    if (error) {
        return <p>{error}</p>
    }
    return(
        <main className="bg-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-8">Our products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
                ))}
            </div>
        </main>
        
    );
}
export default Shop;