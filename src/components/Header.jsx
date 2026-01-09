import React from "react";

const Header = () => {
    return (
    <div>
         <header className="bg-emerald-950 text-white">
         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-emerald-400">Home</a>
          <a href="#" className="hover:text-emerald-400">Products</a>
          <a href="#" className="hover:text-emerald-400">About</a>
          <a href="#" className="hover:text-emerald-400">Contact</a>
        </nav>

        {/* Button */}
        <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-sm">
          Login
        </button>

      </div>
    </header>
    </div>
    )
}

export default Header;