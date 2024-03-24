import React, { FC } from "react";
import GachaFooter from "../../components/GachaFooter";

const Gacha: FC = () => {
  return (
    <div className="bg-black">
      <div className="bg-white h-[12vh] text-[1.6rem] flex items-center justify-center">
        Header
      </div>
      <div className="h-[76vh] text-[1.6rem] text-white bg-header w-[100%] flex items-center justify-center">
        <div className="overflow-x-auto">
          <div
            className="h-[64vh] w-[72vw] bg-white text-black rounded-2xl grid grid-cols-3 gap-4 justify-center items-center"
            id="gachas"
          >
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
              Tama
            </div>
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
              Tama
            </div>
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
              Tama
            </div>
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
              Tama
            </div>
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
              Tama
            </div>
            <div className="mx-auto rounded-2xl flex items-center justify-center w-[32rem] h-[24rem] bg-gray-400">
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
