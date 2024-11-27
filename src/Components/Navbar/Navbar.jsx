import React from "react";
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import icon from "../../assets/icon.jpg"
import bell from "../../assets/bell.png"
import drop from "../../assets/drop.png"

const Navbar = () => {
  return (
    <div className="bg-transparent text-white md:p-5 font-stylish">
      <div className="md:flex justify-between items-center">
        <div className="flex justify-start items-center gap-5 ml-12">
          <img src={logo} alt="" className="w-12 md:w-28" />
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </div>
        <div className="flex justify-center items-center gap-5 mr-12">
        <IoSearchOutline />
        <p>Children</p>
        <img src={bell} alt="" className="w-6"/>
        <div className="flex justify-center items-center gap-1">
        <img src={icon} alt="" className="w-8 rounded-md"/>
        <img src={drop} alt="" className="w-4"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
