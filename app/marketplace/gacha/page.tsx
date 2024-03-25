import React, { FC } from "react";
import GachaFooter from "../../components/GachaFooter";
import Header from "@/app/components/Header";

const Gacha: FC = () => {
  return (
    <div className="bg-black text-theme-primary">
      <Header />
      <div className="h-[73vh] text-[1.6rem] text-white bg-header w-[100%] flex items-center justify-center">
        <div className="overflow-x-auto w-[60%]">
          <div
            className="p-[4rem] h-[50vh] w-[100%] bg-white text-black rounded-2xl grid grid-cols-3 gap-[2rem] "
            id="gachas"
          >
            <div className="rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className=" rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className=" rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className=" rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className=" rounded-2xl flex items-center justify-center col-1-of-3 h-[20vh] bg-gray-400">
              Tama
            </div>
          </div>
        </div>
        <div className="h-[64vh] ml-[5rem]">
          <div>
            재화 1 : 12345 <button>+</button>
          </div>
          <div>
            재화 2 : 12345 <button>+</button>
          </div>
        </div>
        <button className="mt-[50vh] h-[8rem] w-[12rem] bg-gray-200 text-black rounded-2xl text-right">
          가챠버튼
          <br />
          (1, 10회 뽑기)
        </button>
      </div>
      <GachaFooter />
    </div>
  );
};

export default Gacha;
