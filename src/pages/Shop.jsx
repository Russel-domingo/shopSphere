import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
function Shop(){
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
        <div>
            <ul>
               {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product}/>
                </li>
               ))}
            </ul>
        </div>
    );
}
export default Shop;