import {BsSearch} from "react-icons/bs"
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../logo/cookie.png'
import CartCountBadge from "./cartCountBadge";

const Nav = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center p-8">
        <img src={logo} alt="Logo" className="h-12"/>
        <div className="relative w-full max-w-[500px]">
            <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text"
             placeholder="Search Product"></input>
             <BsSearch className="absolute top-0 mt-4 right-0 mr-5 text-gray-500 size-{20}"/>
        </div>
        <div className="flex gap-4">
            <div className="icon__wrapper">
            <CiUser />
            </div>
            <div className="icon__wrapper relative">
            <CiShoppingCart />
            <CartCountBadge size="w-[25px] h-[25px]"/>
            </div>
        </div>

      </div>
        </div>
  )
}

export default Nav