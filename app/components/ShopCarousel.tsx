"use client";

import { useRef, useState } from "react";

const ShopCarousel = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalBackgraund = useRef();

  return (
    <div className="shop__container relative">
      {openModal && (
        <div
          className="h-[65vh] w-[50vw] bg-red-100 text-black rounded-2xl absolute z-10 
          left-[calc(50%-25vw)] top-[calc(50%-33vh)] "
        >
          <div>
            <div className="h-[5vh] bg-gray-400 flex items-center justify-between px-[2vh]">
              <div>Pets1</div>
              <button onClick={() => setOpenModal(false)}>x</button>
            </div>
          </div>
        </div>
      )}
      <div className="shop__card card1  items-center justify-center flex flex-col">
        <div className="shop__title">
          <div className="mb-[24vh]">Card 1</div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gray-600 rounded-2xl h-[4rem] w-[12rem]"
          >
            Details
          </button>
        </div>
      </div>
      <div className="shop__card card2 items-center justify-center flex flex-col">
        <div className="shop__title">
          <div className="mb-[24vh]">Card 2</div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gray-600 rounded-2xl h-[4rem] w-[12rem]"
          >
            Details
          </button>
        </div>
      </div>
      <div className="shop__card card3  items-center justify-center flex flex-col">
        <div className="shop__title">
          <div className="mb-[24vh]">Card 3</div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gray-600 rounded-2xl h-[4rem] w-[12rem]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCarousel;
