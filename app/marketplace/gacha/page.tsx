import React, { FC } from "react";
import GachaFooter from "../../components/GachaFooter";
import Header from "@/app/components/Header";

const Gacha: FC = () => {
  return (
    <div className="bg-black text-theme-primary p-0 m-0 w-[100%] overflow-hidden">
      <Header />
      <div className="h-[63vh] text-[1.6rem] text-white bg-header w-[100%] flex relative m-[4rem]">
        <div className="overflow-x-auto w-[80%] flex items-center justify-center mx-auto">
          <div
            className="p-[3rem] pt-[5rem] h-[60vh] w-[100%] bg-white text-black rounded-2xl grid grid-cols-3 gap-[2rem]"
            id="gachas"
          >
            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>

            <div className="rounded-2xl flex items-center justify-center h-[20vh] bg-gray-400">
              Tama
            </div>
          </div>
        </div>
        <div className="w-[20%] h-[60vh] relative">
          <button className="absolute bottom-0 left-[50%] -translate-x-[50%] h-[12rem] w-[40%] bg-gray-200 text-black rounded-2xl">
            GACHA !
          </button>
        </div>
      </div>
      <GachaFooter />
    </div>
  );
};

export default Gacha;
