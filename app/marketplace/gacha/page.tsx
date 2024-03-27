import React, { FC } from "react";
import GachaFooter from "../../components/GachaFooter";
import Header from "@/app/components/Header";

const Gacha: FC = () => {
  return (
    <div className="bg-black text-theme-primary p-0 m-0 w-[100%] overflow-hidden">
      <Header />
      <div className="h-[63vh] text-[1.6rem] text-white bg-header w-[100%] flex relative mx-auto">
        <div className="overflow-x-auto w-[60%] flex items-center justify-center mx-auto">
          <div
            className="p-[3rem] pt-[5rem] h-[60vh] w-[100%] bg-white text-black rounded-2xl grid grid-cols-3 gap-[2rem]"
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
        <div className="w-[20%] h-[50vh] relative">
          <div className="absolute right-[2rem] top-0 bg-transparent h-[10vh] w-[50%] text-[1.2rem] text-white text-theme-secondary ">
            <div className="block">
              <div>
                재화 1 : 12345 <button>+</button>
              </div>
              <div>
                재화 2 : 12345 <button>+</button>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="mt-[50vh] h-[8rem] w-[12rem] bg-gray-200 text-black rounded-2xl text-right">
          가챠버튼
          <br />
          (1, 10회 뽑기)
        </button> */}
      </div>
      <GachaFooter />
    </div>
  );
};

export default Gacha;
