import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart, BiUser } from "react-icons/bi";

const Header = (props) => {
  return (
    <header className="bg-black shadow-sm flex items-center justify-between px-10 py-5 border-b-[1px] text-white sticky top-0 left-0 z-50">
      <h3 className="text-lg font-bold">
        <a href="#">
          <img className="w-20" src="/icon-removebg.png" alt="" />
        </a>
      </h3>
      <ul className="flex gap-x-10 text-md">
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Jordan</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
      </ul>
      <div className="flex items-center text-md">
        <label
          htmlFor="search"
          className="mr-2 flex items-center justify-center"
        >
          <AiOutlineSearch />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search Here.."
          className="focus:outline-none border-b-[1px] bg-transparent"
        />
      </div>
      <div className="flex items-center gap-x-8 font-semibold text-lg">
        <h3
          onClick={() => window.alert("Your Account!")}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <BiUser /> Account
        </h3>
        <h3
          onClick={() => props.setShowCart(!showCart)}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <BiCart /> Cart
        </h3>
      </div>
    </header>
  );
};

export default Header;
