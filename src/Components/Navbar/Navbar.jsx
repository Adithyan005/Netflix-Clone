import React from "react";
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-transparent  md:p-3">
      <div className="md:flex justify-between items-center">
        <div className="flex justify-start items-center gap-5 ml-5">
          <img src={logo} alt="" className="w-12 md:w-28" />
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </div>
        <div className="">
        <IoSearchOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
