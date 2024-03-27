import { FC } from "react";
import CashBox from "./CashBox";

const Header: FC = () => {
  return (
    <>
      <header className="bg-transparent text-theme h-[15vh] flex root-font width upper text-theme-primary width relative">
        <div className="w-[20%] inline-block">
          <div className="text-[3rem] w-[100%]relative ">
            <div className="flex flex-col items-center top-[3rem] left-[3rem] absolute ">
              <a className="flex flex-col items-center" href="/">
                <span>tamagochi</span>
                <span>PROJECT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[80%] relative inline-block">
          <div className="flex items-center text-[2rem] gap-[13rem] right-[6rem] absolute top-[3.6rem] ">
            <a href="/pets" className="btn btn-line">
              PETS
            </a>
            <a href="/dressroom" className="btn btn-line">
              DRESSROOM
            </a>
            <a href="/marketplace/gacha" className="btn btn-line">
              MARKETPLACE
            </a>
            <button className="text-[5rem] mb-[0.6rem]">&#8801;</button>
          </div>
        </div>
      </header>
      <div className="absolute right-[9rem]">
        <CashBox />
      </div>
    </>
  );
};

export default Header;
