import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Advanced React App
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline  ">
            Home
          </Link>
          <Link to="/form" className="hover:underline">
            Contact Form
          </Link>
          <Link to="/map" className="hover:underline">
            Map
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
