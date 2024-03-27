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
    <header className="bg-transparent text-theme h-[15vh] flex root-font width upper text-theme-primary width">
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
        <div className="flex items-center text-[1.6rem] gap-[13rem] right-[3rem] absolute top-[3.6rem] w-[68%] ">
          <a href="/pets" className="btn btn-line">
            PETS
          </a>
          <a href="/dressroom" className="btn btn-line">
            DRESSROOM
          </a>
          <a href="/marketplace/gacha" className="btn btn-line">
            MARKETPLACE
          </a>
          <div className="text-[5rem] mb-[0.6rem] w-[7rem] h-[7rem]">
            <input
              type="checkbox"
              className="button__hamburger__checkbox"
              id="modal-toggle"
            />
            <label htmlFor="modal-toggle" className="button__modal">
              <span className="button__icon">&nbsp;</span>
            </label>
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
