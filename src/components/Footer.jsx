import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyApp</h2>
          <p className="text-sm">
            Building amazing web experiences with React and Tailwind CSS.
            Follow us for latest updates and projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="http://localhost:5173/#" className="hover:text-white transition">🌐 Website</a>
            <a href="#" className="hover:text-white transition">🐦 Twitter</a>
            <a href="#" className="hover:text-white transition">📘 Facebook</a>
            <a href="#" className="hover:text-white transition">📸 Instagram</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;