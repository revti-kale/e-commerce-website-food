import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../logo/image-food.png';
import CartCountBadge from "./cartCountBadge";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center p-8">
        <img src={logo} alt="Logo" className="h-[80px] w-[100px]" />
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product"
          />
          <BsSearch className="absolute top-0 mt-4 right-0 mr-5 text-gray-500 text-[20px]" />
        </div>
        <div className="flex gap-4">
          <div className="icon__wrapper">
            <CiUser />
          </div>
          <div className="icon__wrapper relative">
            <CiShoppingCart />
            <CartCountBadge size="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <img src={logo} alt="Logo" className="h-[60px] w-[80px]" />
        <button onClick={toggleMenu} className="text-2xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-white w-64 h-full z-50 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300`}
      >
        <div className="p-8">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-2xl">
              &times; {/* Close icon */}
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <a href="#" className="flex items-center justify-end gap-2 text-xl">
              <CiUser />
              Profile
            </a>
            <a href="#" className="flex items-center justify-end gap-2 text-xl">
              <CiShoppingCart />
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
