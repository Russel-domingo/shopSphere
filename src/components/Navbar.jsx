function Navbar() {
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
                <p>ShopSphere</p>
            </div>
           
            <ul className="flex flex-row gap-6 items-center">
                <li>
                    Home
                </li>
                <li>
                    Shop
                </li>
                <li>
                    About
                </li>
            </ul>
           
            <div>
                <p>Cart icon</p>
            </div>
        </nav>
    );
}
export default Navbar;