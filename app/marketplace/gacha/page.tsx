import React, { FC } from "react";
import GachaFooter from "../../components/GachaFooter";
import Header from "@/app/components/Header";

const Gacha: FC = () => {
  return (
    <div className="bg-black root-fontstyle">
      <Header />
      <div className="h-[73vh] text-[1.6rem] bg-black w-[100%] flex items-center justify-center">
        <div className=" w-[60%]">
          <div
            className="p-[4rem] h-[50vh] w-[50vw] bg-white text-black rounded-2xl grid grid-cols-3 gap-[2rem]"
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
        <div className="w-[20rem] h-[5rem] ml-[5rem] absolute top-[16vh] right-[7vw] text-white">
          <div>
            재화 1 : 12345 <button>+</button>
          </div>
          <div>
            재화 2 : 12345 <button>+</button>
          </div>
        </div>
        <button className="w-[13vw] h-[13vh] ml-[5rem] rounded-2xl absolute bottom-[23.5vh] right-[7vw] bg-gray-500 text-[3.0rem]">
          GACHA!
        </button>
      </div>
      <GachaFooter />
    </div>
  );
};

export default Gacha;
