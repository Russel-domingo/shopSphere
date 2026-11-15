function ProductCard(props) {
    return(
        <div className="bg-white p-4 rounded-xl border shadow-green-700 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center h-48 mb-4">
                <img src={props.product.image} alt={props.product.title} className="max-h-full max-w-full object-contain"/>    
            </div>
            
            <div className="space-y-2 ">
                <h2 className="text-lg font-semibold text-green-900">{props.product.title}</h2>
                <h2 className="text-xl font-bold text-green-800">${props.product.price.toFixed(2)}</h2>
                <h2 className="text-sm text-gray-500 ">{props.product.category}</h2>
            </div>
            
            <button 
                className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors"
                onClick={() => props.onAddToCart(props.product)}>Add to cart
            </button>
        </div>
    );
}

export default ProductCard;