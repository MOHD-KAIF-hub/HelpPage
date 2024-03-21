import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/Logo (1).png";
const Header = () => {
  return (
    <div className="p-5 border-b border-b-lime-500/25 fixed top-0 w-full z-20 bg-white">
      <div className=" mx-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className=" w-36 mr-2" />
          {/* <h1 className="text-white text-lg font-semibold"></h1> */}
        </div>

        {/* Navigation links on the right corner */}
        <nav className="flex items-center space-x-8 text-lime-900 text-sm">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/my-chatbots" className="hover:text-black">
            Chatbots
          </Link>
          <Link to="/" className="hover:text-black flex items-center">
            Help <span className="text-2xl text-lime-900">&rarr;</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
