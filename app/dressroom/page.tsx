import React, { FC } from "react";
import Header from "../components/Header";
import ShopCarousel from "../components/ShopCarousel";
import DropBox from "../components/DropBox";
import GachaFooter from "../components/GachaFooter";
import { FaSearch } from "react-icons/fa";

const Dressroom: FC = () => {
  return (
    <section className="bg-theme h-[100vh] width m-0 p-0">
      <Header />
      <div className="h-[73vh] text-[1.6rem] text-white bg-header w-[100%] flex items-center justify-center">
        <div className="overflow-x-auto">
          <div
            className="h-[64vh] w-[60vw] bg-white text-black rounded-2xl flex flex-col justify-center items-center"
            id="pets"
          >
            <div className="h-[10%] w-[100%] bg-gray-600 flex items-center justify-between mx-[2vw]">
              <ul className="h-full w-[90%] gap-[3%] flex ml-[2%]">
                <li className="h-[80%] w-[12%] bg-white">set1</li>
                <li className="h-[80%] w-[12%] bg-white">set2</li>
                <li className="h-[80%] w-[12%] bg-white">set3</li>
                <button className="h-[5vh] w-[5vh] bg-green-400">+</button>
              </ul>
            </div>
            <div className="h-[70%] w-[100%] bg-white">내 캐릭터</div>
            <div className="h-[20%] w-[100%] bg-yellow-200 flex">
              <div className="h-full w-[80%] bg-purple-200 flex justify-between items-center">
                <button className="w-[10%] h-full">Prev</button>

                <ul className="w-[90%] h-full bg-orange-800 flex items-center justify-center overflow-hidden gap-[5%]">
                  <li className="bg-black w-[10rem] h-[10rem]">item1</li>
                  <li className="bg-black w-[10rem] h-[10rem]">item1</li>
                  <li className="bg-black w-[10rem] h-[10rem]">item1</li>
                  <li className="bg-black w-[10rem] h-[10rem]">item1</li>
                  <li className="bg-black w-[10rem] h-[10rem]">item1</li>
                </ul>

                <button className="w-[10%]">Next</button>
              </div>
              <div className="h-full w-[20%] bg-orange-200">
                <form className="flex justify-center gap-[2vw] mx-[0.5vw] mt-[0.5vh]">
                  <select className="text-[1.4rem] appearance-none w-[80%] text-center font-bold bg-gray-600 ">
                    <option value="">Product types</option>
                    <option value="head">Head</option>
                    <option value="top">Top</option>
                    <option value="pants">Pants</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                  </select>
                  <button
                    type="submit"
                    className="w-[3rem] h-[3rem] bg-gray-600 relative"
                  >
                    V
                  </button>
                </form>
                <div className="flex justify-center">
                  <div className="mt-[4vh] border-2 border-gray-600 w-[70%] rounded-2xl text-center">
                    Items
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GachaFooter />
    </section>
  );
};

export default Dressroom;
