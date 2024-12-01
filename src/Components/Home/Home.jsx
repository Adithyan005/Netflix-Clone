import React from "react";
import Navbar from "../Navbar/Navbar";
import maharaj from "../../assets/maharaj.jpg";
import mahr from "../../assets/mahr.png";
import play from "../../assets/play.png";
import info from "../../assets/info.png"

const Home = () => {
  const container = {
    backgroundImage: `url(${maharaj})`,
    backgroundSize: "cover",
    backgroundPositon: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={container}>
      <div className="relative">
        <Navbar />
      </div>
      <div className="absolute bottom-10 left-5 grid-cols-2">
        <img src={mahr} alt="" className="w-[25rem]" />
        <p className="text-white font-stylish text-justify w-[35rem]">
          Karsan is a progressive thinker and social reformer in pre-independent
          Bombay, living with his maternal uncle and aunt after the death of his
          mother.
        </p>
        <div className="pt-5 flex gap-7">
          <div className="bg-white w-[6.5rem] font-stylish text-sm font-bold h-8 flex justify-center items-center">
            <img src={play} alt="" className="w-9" />
            <p>Play</p>
          </div>
          <div className="bg-gray-300 text-white flex justify-center items-center font-bold gap-3 w-[7rem] h-8 text-sm">
            <img src={info} alt="" className="w-5"/>
            <p>More info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
