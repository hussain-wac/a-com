import React from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

function Topbar() {
  return (
    <header className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white font-extrabold text-2xl">
          <Link href="/">E-Shop</Link>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
            <input 
              type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 rounded-r-md flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-white">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
          <div className="cursor-pointer hover:underline">
            Sign In
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
