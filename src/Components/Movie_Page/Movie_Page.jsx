import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Movie_Page = () => {
  const location = useLocation();
  const { image, name, year, director, cast, writers, rating, description } = location.state || {};

  return (
    <div className="text-white">
      <div className="flex justify-between items-center">
        <div className="ms-4 px-6 py-4">
          <img src={logo} alt="" className="w-[5rem]" />
        </div>
        <div>
          <ul className="flex gap-4 px-6 me-4 py-4">
            <li>
              <a href="#">Cast & Crew</a>
            </li>
            <li>
              <a href="#">User Reviews</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-3 px-6 ms-4">
          <h1 className="text-4xl font-stylish">{name}</h1>
        </div>
        <div className="mt-7 px-6 ms-4">
          <img src={image} alt="" className="w-[35vw]"/>
        </div>
       
      </div>
    </div>
  );
};

export default Movie_Page;
