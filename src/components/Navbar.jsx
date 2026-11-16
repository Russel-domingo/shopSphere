
import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
function Navbar({totalItems}) {
    
    return(
        // <div className="flex flex-row gap-2 justify-center text-black">
        //     <div>ShopSphere logo</div>
        //     <div>Home link</div>
        //     <div>Shop link</div>
        //     <div>About link</div>
        //     <div>Shopping cart icon</div>
        // </div>
        <nav className="bg-white text-black flex flex-row justify-between p-8 border-b ">
            <div>
                <Link to="/" className="text-2xl "> <p>ShopSphere</p> </Link>
            </div>
           
            <ul className="flex flex-row gap-6 items-center">
                <li><Link to="/" className="text-2xl">Home</Link></li>
                <li><Link to="shop" className="text-2xl">Shop</Link></li>
                <li><Link to="about" className="text-2xl">About</Link></li>
            </ul>
           
            <div>
                <Link to="/cart" className="relative inline-flex items-center">
                    <CiShoppingCart className="text-3xl" />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                </Link>
                
            </div>
        </nav>
    );
}
export default Navbar;