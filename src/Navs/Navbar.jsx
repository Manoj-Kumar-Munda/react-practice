
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">Ecommerce Shop</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                {/* Mobile Menu Icon */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex flex-grow justify-center">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          
          {/* Cart Icon */}
          <div className="flex-shrink-0 flex items-center">
            <FaShoppingCart className="text-white h-6 w-6" />
            <span className="text-gray-300 ml-2">0</span> {/* You can replace 0 with the actual cart count */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;