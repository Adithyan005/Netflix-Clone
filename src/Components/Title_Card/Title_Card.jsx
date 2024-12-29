import React from "react";
import card_data from "../Cards_Data/Cards_Data";

const Title_Card = () => {
  return (
    <div>
      <h1 className="text-3xl font-stylish text-center mt-10 mb-10">
        Popular on Netflix
      </h1>
      <div className="flex justify-center mb-10">
        <div className="w-[200vh] overflow-x-scroll">
          <div className="flex w-[500vh] gap-10">
            {card_data.map((card, index) => {
              return (
                <div
                  key={index}
                  className="text-white"
                >
                  <img src={card.image} alt="" className="w-[40rem]" />
                  <p>{card.name}</p>
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
