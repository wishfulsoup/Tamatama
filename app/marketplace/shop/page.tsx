import GachaFooter from "@/app/components/GachaFooter";
import Header from "@/app/components/Header";
import React, { FC } from "react";

const Shop: FC = () => {
  return (
    <div className="bg-black root-fontstyle">
      <Header />
      <div className="h-[73vh] text-[1.6rem] text-white bg-header w-[100%] flex items-center justify-center">
        <div className="h-[64vh] mr-[5rem] w-[30rem] bg-white text-black flex justify-center">
          <div className="bg-gray-500 rounded-2xl h-[5rem] w-[24rem] flex justify-between items-center px-[2rem]">
            <div className="text-[2.0rem] font-semibold">DropBox</div>
            <button className="border-l-2 border-gray-300">세모</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div
            className="h-[64vh] w-[48vw] bg-white text-black rounded-2xl flex justify-center items-center"
            id="pets"
          >
            <div className="text-center">펫 카루셀 넣어주세요</div>
          </div>
        </div>
        <div className="h-[64vh] w-[30rem] ml-[5rem] text-right">
          <div>
            <div>
              재화 1 : 12345 <button>+</button>
            </div>
            <div>
              재화 2 : 12345 <button>+</button>
            </div>
          </div>
          <div className="bg-white text-black mt-[5vh] h-[50vh] flex flex-col items-center justify-center gap-[8vh] text-[4rem] font-bold">
            <div>HOW MUCH</div>
            <div>DETAIL</div>
            <div>TRAIT</div>
          </div>
        </div>
      </div>
      <GachaFooter />
    </div>
  );
};

export default Shop;
