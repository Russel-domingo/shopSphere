function ProductCard(props) {
    return(
        <div>
            <img src={props.product.image} alt={props.product.title} />
            <h2>{props.product.title}</h2>
            <h2>{props.product.price}</h2>
            <h2>{props.product.category}</h2>
        </div>
    );
}

export default ProductCard;