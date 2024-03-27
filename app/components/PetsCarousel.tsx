import React, { FC, useState } from "react";
import "../globals.css";

const PetsCarousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalCards: number = 3;

  const handlePrevButton = (): void => {
    setActiveIndex((idx) => (idx - 1 + totalCards) % totalCards);
  };

  const handleNextButton = (): void => {
    setActiveIndex((idx) => (idx + 1) % totalCards);
  };

  return (
    <div className="w-[60%] h-[60vh] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md visible">
      <div className="relative bg-orange-500 h-[60vh] -translate-y-1/2 top-1/2 pt-[3rem] overflow-hidden width">
        <button
          className="card__btn"
          style={{ left: "20%" }}
          onClick={handlePrevButton}
        >
          PREV
        </button>
        <div
          className={`absolute card  ${
            activeIndex === 2
              ? "card__center"
              : activeIndex === 1
              ? "card__prev"
              : "card__next"
          } w-[25%]`}
        >
          <div className="h-[40vh] bg-red-900 w-[100%]">2</div>
        </div>
        <div
          className={`absolute card ${
            activeIndex === 1
              ? "card__center"
              : activeIndex === 0
              ? "card__prev"
              : "card__next"
          } w-[25%]`}
        >
          <div className="h-[40vh] bg-red-900 w-[100%]">1</div>
        </div>
        <div
          className={`absolute card ${
            activeIndex === 0
              ? "card__center"
              : activeIndex === totalCards - 1
              ? "card__prev"
              : "card__next"
          } w-[25%]`}
        >
          <div className="h-[40vh] bg-red-900 w-[100%]">0</div>
        </div>
        <button
          className="card__btn"
          style={{ right: "20%" }}
          onClick={handleNextButton}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PetsCarousel;
