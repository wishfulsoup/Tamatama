import { FC } from "react";

const Header: FC = () => {
  return (
    <header className=" bg-transparent text-theme h-[15vh] flex root-font width upper root-fontstyle">
      <div className="w-[20%] ">
        <div className="text-[3rem] w-[100%]relative ">
          <div className="flex flex-col items-center top-[3rem] left-[3rem] absolute ">
            <a className="flex flex-col items-center" href="/">
              <span>tamagochi</span>
              <span>PROJECT</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-[80%] relative">
        <div className="flex items-center text-[2rem] gap-[13rem] right-[6rem] absolute top-[3.6rem] ">
          <a href="/pets" className="btn btn-line">
            PETS
          </a>
          <a href="/dressroom" className="btn btn-line">
            DRESS ROOM
          </a>
          <a href="/marketplace/gacha" className="btn btn-line">
            MARKET PLACE
          </a>
          <button className="text-[5rem] mb-[0.6rem]">&#8801;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
