import React from "react";
import card_data from "../Cards_Data/Cards_Data";

const Title_Card = (props) => {
  return (
    <div className="text-white font-stylish ">
      <h1 className="text-xl mt-8 font-semibold">
        {props.title}
      </h1>
      <div className="ms-4 flex justify-center">
        <div className="scr w-[210vh] overflow-x-scroll mt-4">
          <div className="flex w-[500vh] gap-3">
            {card_data.map((card, index) => {
              return (
                <div
                  key={index}
                  className="text-white"
                >
                  <img src={card.image} alt="" className="w-[40vw]" />
                  <p className="font-stylish">{card.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title_Card;
