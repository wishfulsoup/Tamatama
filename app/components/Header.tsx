import { FC } from "react";
import CashBox from "./CashBox";

const Header: FC = () => {
  return (
    <header className="bg-transparent text-theme h-[15vh] flex root-font width upper text-theme-primary width">
      <div className="w-[33.333333%] inline-block">
        <div className="text-[3rem] w-[100%]relative ">
          <div className="flex flex-col items-center top-[3rem] left-[3rem] absolute ">
            <a className="flex flex-col items-center" href="/">
              <span>tamagotchi</span>
              <span>PROJECT</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[66.6666667%] relative inline-block">
        <div className="flex items-center justify-end text-[1.6rem] gap-[13rem] right-[1rem] absolute top-[3.6rem] w-[68%] ">
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
            <nav className="modal__nav">
              <ul className="flex flex-col">
                <li className="modal__item">HI</li>
                <li className="modal__item">THERE</li>
                <li className="modal__item">WASSUP</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-[11rem] top-[12rem]">
        <CashBox />
      </div> */}
    </header>
  );
};

export default Header;
