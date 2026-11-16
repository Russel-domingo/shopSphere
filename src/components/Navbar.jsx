
import { Link } from "react-router";
function Navbar(props) {
    const cartItems = props.cartItems.length
    return(
        // <div className="flex flex-row gap-2 justify-center text-black">
        //     <div>ShopSphere logo</div>
        //     <div>Home link</div>
        //     <div>Shop link</div>
        //     <div>About link</div>
        //     <div>Shopping cart icon</div>
        // </div>
        <nav className="bg-white text-black flex flex-row justify-between">
            <div>
                <Link to="/"> <p>ShopSphere</p> </Link>
            </div>
           
            <ul className="flex flex-row gap-6 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
           
            <div>
                <Link to="cart"> <p>Cart icon</p> </Link>
                <p>{cartItems}</p>
            </div>
        </nav>
    );
}
export default Navbar;