import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
         <header className="bg-emerald-950 text-white">
         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Skills</Link>
        <Link to="/contact">Contact</Link>
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